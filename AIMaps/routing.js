// ---------------------------------------------------------------------------
// Routing + geocoding, in the same spirit as the rest of the prototype:
// plain script, no build step, works over file://.
//
// Engines, in order of preference:
//   1. GraphHopper  - what openstreetmap.org offers for foot routing. Free
//                     tier is generous; paste a key from graphhopper.com
//                     into GRAPHHOPPER_KEY below.
//   2. OSRM (foot)  - the FOSSGIS-run instance behind openstreetmap.org's
//                     own directions panel. No key needed, so it is the
//                     default. Fair-use: fine for a prototype.
//   3. Straight lines - offline fallback so the UI never dead-ends. Clearly
//                     labelled as an estimate when it happens.
//
// Every engine resolves to the same shape:
//   { geometry: GeoJSON LineString, distance: metres, duration: seconds,
//     engine: "human readable label", estimated: bool }
// ---------------------------------------------------------------------------

const GRAPHHOPPER_KEY = "";

const WALK_SPEED_MS = 1.3; // ~4.7 km/h, used only for the straight-line estimate

const Routing = {
  engineLabel() {
    return GRAPHHOPPER_KEY.trim() ? "GraphHopper" : "OSRM foot profile";
  },

  // coords: array of [lng, lat]. Returns a route through them, in order.
  async route(coords) {
    if (!coords || coords.length < 2) throw new Error("Need at least two points");
    try {
      return GRAPHHOPPER_KEY.trim()
        ? await routeGraphHopper(coords)
        : await routeOsrm(coords);
    } catch (err) {
      console.warn("Routing engine unavailable, falling back to straight lines:", err);
      return straightLineRoute(coords);
    }
  }
};

async function routeOsrm(coords) {
  const path = coords.map((c) => c[0].toFixed(6) + "," + c[1].toFixed(6)).join(";");
  const url = "https://routing.openstreetmap.de/routed-foot/route/v1/foot/" + path +
    "?overview=full&geometries=geojson&steps=false";
  const res = await fetch(url);
  if (!res.ok) throw new Error("OSRM HTTP " + res.status);
  const json = await res.json();
  if (json.code !== "Ok" || !json.routes || !json.routes.length) {
    throw new Error("OSRM: " + (json.code || "no route"));
  }
  const route = json.routes[0];
  return {
    geometry: route.geometry,
    distance: route.distance,
    duration: route.duration,
    engine: "OSRM foot profile (routing.openstreetmap.de)",
    estimated: false
  };
}

async function routeGraphHopper(coords) {
  const points = coords.map((c) => "point=" + c[1].toFixed(6) + "," + c[0].toFixed(6)).join("&");
  const url = "https://graphhopper.com/api/1/route?" + points +
    "&profile=foot&points_encoded=false&key=" + encodeURIComponent(GRAPHHOPPER_KEY.trim());
  const res = await fetch(url);
  if (!res.ok) throw new Error("GraphHopper HTTP " + res.status);
  const json = await res.json();
  if (!json.paths || !json.paths.length) throw new Error("GraphHopper: no route");
  const path = json.paths[0];
  return {
    geometry: path.points, // already a GeoJSON LineString when points_encoded=false
    distance: path.distance,
    duration: path.time / 1000,
    engine: "GraphHopper foot profile",
    estimated: false
  };
}

function straightLineRoute(coords) {
  let distance = 0;
  for (let i = 1; i < coords.length; i++) {
    distance += haversineMetres(coords[i - 1], coords[i]);
  }
  return {
    geometry: { type: "LineString", coordinates: coords.slice() },
    distance: distance,
    duration: distance / WALK_SPEED_MS,
    engine: "straight-line estimate (routing server unreachable)",
    estimated: true
  };
}

function haversineMetres(a, b) {
  const R = 6371000;
  const toRad = (d) => (d * Math.PI) / 180;
  const dLat = toRad(b[1] - a[1]);
  const dLng = toRad(b[0] - a[0]);
  const s = Math.sin(dLat / 2) ** 2 +
    Math.cos(toRad(a[1])) * Math.cos(toRad(b[1])) * Math.sin(dLng / 2) ** 2;
  return 2 * R * Math.asin(Math.sqrt(s));
}

// ---- Geocoding (Nominatim, the OSM geocoder) ------------------------------

async function geocodePlace(query) {
  const url = "https://nominatim.openstreetmap.org/search?format=jsonv2&limit=1&q=" +
    encodeURIComponent(query);
  const res = await fetch(url, { headers: { "Accept-Language": "en-GB" } });
  if (!res.ok) throw new Error("Nominatim HTTP " + res.status);
  const results = await res.json();
  if (!results.length) return null;
  const hit = results[0];
  return {
    lng: parseFloat(hit.lon),
    lat: parseFloat(hit.lat),
    name: hit.name || hit.display_name.split(",")[0],
    displayName: hit.display_name
  };
}
