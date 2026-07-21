// ---------------------------------------------------------------------------
// Variable source collection: places for an area come from several sources,
// merged and de-duplicated, so the map is never dependent on one dataset.
//
//   curated    - the hand-written seed in pois.js (wins every tie)
//   osm        - OpenStreetMap via the Overpass API (heritage, food, nature,
//                shops... the "what is physically here" layer)
//   wikipedia  - geosearch + intro extracts (the "why it matters" layer)
//
// Adding a source = write one loader that returns GeoJSON features with
// { id, name, type, blurb, source } properties and push it into loadPlaces.
// Obvious next candidates: Historic England listings, National Trust API.
// ---------------------------------------------------------------------------

const SOURCE_LABELS = {
  curated: "Stones & Stories editors",
  osm: "OpenStreetMap",
  wikipedia: "Wikipedia"
};

// Seed features count as the "curated" source.
POIS.features.forEach((f) => { f.properties.source = f.properties.source || "curated"; });

// Fetch, merge and de-duplicate every source for a bounding box.
// bounds: { west, south, east, north }. Returns { features, report }.
async function loadPlaces(bounds) {
  const settled = await Promise.allSettled([
    loadOverpass(bounds),
    loadWikipedia(bounds)
  ]);

  const report = [];
  const merged = [];

  // Curated seed first: it always survives the merge. If the scan touches
  // the pilot area at all, keep the whole seed rather than clipping it,
  // so curated walks never lose their stops to a bounding box.
  const seed = POIS.features.some((f) => inBounds(f.geometry.coordinates, bounds))
    ? POIS.features.slice()
    : [];
  merged.push(...seed);
  report.push({ source: "curated", ok: true, count: seed.length });

  const names = ["osm", "wikipedia"];
  settled.forEach((result, i) => {
    if (result.status === "fulfilled") {
      const fresh = result.value.filter((f) => !isDuplicate(f, merged));
      merged.push(...fresh);
      report.push({ source: names[i], ok: true, count: fresh.length });
    } else {
      console.warn(names[i] + " source failed:", result.reason);
      report.push({ source: names[i], ok: false, count: 0 });
    }
  });

  return { features: merged, report };
}

function inBounds(coords, b) {
  return coords[0] >= b.west && coords[0] <= b.east &&
         coords[1] >= b.south && coords[1] <= b.north;
}

// Same-ish name within 300 m = same place. Earlier entries win, and the
// merge order (curated, then OSM, then Wikipedia) encodes the priority.
function isDuplicate(feature, existing) {
  const name = normaliseName(feature.properties.name);
  return existing.some((f) =>
    normaliseName(f.properties.name) === name &&
    haversineMetres(f.geometry.coordinates, feature.geometry.coordinates) < 300
  );
}

function normaliseName(name) {
  return (name || "").toLowerCase().replace(/^the\s+/, "").replace(/[^a-z0-9]+/g, " ").trim();
}

// ---- OpenStreetMap via Overpass -------------------------------------------

const OVERPASS_URL = "https://overpass-api.de/api/interpreter";

async function loadOverpass(b) {
  const box = [b.south, b.west, b.north, b.east].map((n) => n.toFixed(5)).join(",");
  // Each clause gets its own output cap. A single shared cap would fill up
  // with whichever clause runs first (historic, in most English villages)
  // and starve the food/nature/shop groups entirely.
  const query = `
    [out:json][timeout:25];
    nwr["name"]["historic"](${box}); out center 40;
    nwr["name"]["tourism"~"^(museum|attraction|artwork|gallery|viewpoint)$"](${box}); out center 25;
    nwr["name"]["amenity"~"^(pub|cafe|restaurant|bar)$"](${box}); out center 30;
    nwr["name"]["natural"~"^(spring|peak)$"](${box}); out center 15;
    nwr["name"]["leisure"~"^(nature_reserve|park|garden)$"](${box}); out center 15;
    nwr["name"]["shop"~"^(gift|books|crafts|art|antiques|deli|farm|bakery)$"](${box}); out center 20;
  `;
  const res = await fetch(OVERPASS_URL, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: "data=" + encodeURIComponent(query)
  });
  if (!res.ok) throw new Error("Overpass HTTP " + res.status);
  const json = await res.json();

  // With per-clause outputs, an element matching two clauses (a historic
  // pub, say) is emitted twice; keep the first occurrence only.
  const seen = new Set();
  return (json.elements || [])
    .filter((el) => {
      const key = el.type + "/" + el.id;
      if (seen.has(key)) return false;
      seen.add(key);
      return true;
    })
    .map(osmElementToFeature)
    .filter(Boolean);
}

function osmElementToFeature(el) {
  const tags = el.tags || {};
  const lng = el.lon != null ? el.lon : el.center && el.center.lon;
  const lat = el.lat != null ? el.lat : el.center && el.center.lat;
  if (lng == null || lat == null || !tags.name) return null;

  const category = osmCategory(tags);
  if (!category) return null;

  return {
    type: "Feature",
    properties: {
      id: "osm-" + el.type + "-" + el.id,
      name: tags.name,
      type: category,
      blurb: osmBlurb(tags),
      source: "osm",
      url: tags.website || (tags.wikipedia
        ? "https://en.wikipedia.org/wiki/" + encodeURIComponent(tags.wikipedia.replace(/^en:/, ""))
        : null)
    },
    geometry: { type: "Point", coordinates: [lng, lat] }
  };
}

function osmCategory(tags) {
  // What you can do at a place beats what the building is: a pub in a
  // listed building is somewhere to drink first, heritage second.
  if (/^(pub|cafe|restaurant|bar)$/.test(tags.amenity || "")) return "food";
  if (tags.shop) return "shop";
  if (/^(museum|attraction|artwork|gallery)$/.test(tags.tourism || "")) return "heritage";
  if (tags.historic) return "heritage";
  if (tags.tourism === "viewpoint") return "nature";
  if (/^(spring|peak)$/.test(tags.natural || "")) return "nature";
  if (/^(nature_reserve|park|garden)$/.test(tags.leisure || "")) return "nature";
  return null;
}

function osmBlurb(tags) {
  if (tags.description) return tags.description;
  const kind = tags.historic || tags.tourism || tags.amenity ||
    tags.natural || tags.leisure || (tags.shop && tags.shop + " shop") || "place";
  const label = kind.replace(/_/g, " ");
  return capitalise(label) + " recorded by the OpenStreetMap community." +
    (tags["heritage:operator"] || tags.listed_status
      ? " Officially listed heritage." : "");
}

function capitalise(s) {
  return s.charAt(0).toUpperCase() + s.slice(1);
}

// ---- Wikipedia geosearch ---------------------------------------------------

async function loadWikipedia(b) {
  const centreLat = (b.south + b.north) / 2;
  const centreLng = (b.west + b.east) / 2;
  // Radius that covers the box (capped at the API max of 10 km).
  const radius = Math.min(10000, Math.ceil(
    haversineMetres([centreLng, centreLat], [b.east, b.north])
  ));

  const url = "https://en.wikipedia.org/w/api.php" +
    "?action=query&format=json&origin=*" +
    "&generator=geosearch" +
    "&ggscoord=" + centreLat + "%7C" + centreLng +
    "&ggsradius=" + radius + "&ggslimit=20" +
    "&prop=extracts%7Ccoordinates" +
    "&exintro=1&explaintext=1&exsentences=2&exlimit=20";

  const res = await fetch(url);
  if (!res.ok) throw new Error("Wikipedia HTTP " + res.status);
  const json = await res.json();
  const pages = (json.query && json.query.pages) || {};

  return Object.values(pages)
    .filter((p) => p.coordinates && p.coordinates.length)
    // Meta-articles and administrative entities are geotagged but are not
    // places you can stand at.
    .filter((p) => !/^(history of|list of|timeline of|geography of)/i.test(p.title))
    .filter((p) => !/(rural district|urban district|civil parish|district council|constituency)/i.test(p.title))
    .map((p) => ({
      type: "Feature",
      properties: {
        id: "wiki-" + p.pageid,
        name: p.title,
        type: "story",
        blurb: p.extract || "A place with its own Wikipedia article.",
        source: "wikipedia",
        url: "https://en.wikipedia.org/?curid=" + p.pageid
      },
      geometry: {
        type: "Point",
        coordinates: [p.coordinates[0].lon, p.coordinates[0].lat]
      }
    }));
}
