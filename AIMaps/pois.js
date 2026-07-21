// Sample POIs for the Avebury pilot patch.
// This is plain GeoJSON wrapped in a const so it loads over file:// without a
// web server. In phase 2 this file is replaced by a fetch from the database.
// Coordinates are approximate: nudge them against OS mapping as you go.
// Categories: heritage, story, nature, food, shop (defined in index.html).

const POIS = {
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "properties": {
        "id": "stone-circle",
        "name": "Avebury Stone Circle",
        "type": "heritage",
        "blurb": "The largest stone circle in Britain, raised around 4,500 years ago and big enough to swallow most of the village inside its henge. Wander all four quadrants; each has its own character.",
        "tip": "The south-west quadrant is usually the quietest, even on busy days."
      },
      "geometry": { "type": "Point", "coordinates": [-1.8542, 51.4286] }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "the-cove",
        "name": "The Cove",
        "type": "heritage",
        "blurb": "Two surviving megaliths of a three-stone setting in the north-east quadrant. The larger is reckoned to weigh around 100 tonnes, one of the heaviest stones ever raised in Britain."
      },
      "geometry": { "type": "Point", "coordinates": [-1.8536, 51.4297] }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "barber-stone",
        "name": "Barber Surgeon Stone",
        "type": "story",
        "blurb": "When this stone was re-erected in 1938, excavators found a man's skeleton beneath it, along with coins and a pair of scissors. The story goes that it toppled onto him while medieval villagers were burying the stones."
      },
      "geometry": { "type": "Point", "coordinates": [-1.8556, 51.4277] }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "devils-chair",
        "name": "The Devil's Chair",
        "type": "story",
        "blurb": "A vast portal stone at the southern entrance with a natural seat worn into it. Folklore says you can summon the Devil by running around it a hundred times anticlockwise. Local kids settle for sitting in it."
      },
      "geometry": { "type": "Point", "coordinates": [-1.8541, 51.4271] }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "keiller-museum",
        "name": "Alexander Keiller Museum",
        "type": "heritage",
        "blurb": "Tells the story of the marmalade heir who bought Avebury in the 1930s, excavated it, and re-erected many of the fallen stones. Finds from those digs live here in the old stables and barn."
      },
      "geometry": { "type": "Point", "coordinates": [-1.8565, 51.4292] }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "avebury-manor",
        "name": "Avebury Manor and Garden",
        "type": "heritage",
        "blurb": "A much-altered 16th-century manor refurnished room by room for the BBC's The Manor Reborn. Unusually for a National Trust house, you are allowed to sit on the furniture."
      },
      "geometry": { "type": "Point", "coordinates": [-1.8577, 51.4299] }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "st-james",
        "name": "St James' Church",
        "type": "heritage",
        "blurb": "A church with Saxon bones and a carved Norman font, sitting just outside the henge bank. The font shows a bishop spearing a serpent, which feels pointed given the neighbours."
      },
      "geometry": { "type": "Point", "coordinates": [-1.8570, 51.4289] }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "red-lion",
        "name": "The Red Lion",
        "type": "food",
        "blurb": "Possibly the only pub in the world standing inside a prehistoric stone circle. Thatched, 17th century, and allegedly haunted by a ghost called Florrie who was thrown down the well.",
        "tip": "The old well is glassed over inside the pub; you can peer straight down it."
      },
      "geometry": { "type": "Point", "coordinates": [-1.8531, 51.4288] }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "circles-cafe",
        "name": "Circles Cafe",
        "type": "food",
        "blurb": "The National Trust cafe in the old farmyard. Soup, cake and somewhere to thaw out; Avebury is windswept in a way the photos never show."
      },
      "geometry": { "type": "Point", "coordinates": [-1.8562, 51.4291] }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "henge-shop",
        "name": "The Henge Shop",
        "type": "shop",
        "blurb": "The village's independent shop: maps, books on the landscape, and a great deal of crystals. Good for an OS Explorer 157 if you have forgotten yours."
      },
      "geometry": { "type": "Point", "coordinates": [-1.85571, 51.42813] }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "west-kennet-avenue",
        "name": "West Kennet Avenue",
        "type": "heritage",
        "blurb": "A double row of paired stones running from the circle towards the Sanctuary, about a mile and a half of processional route. Walk it southwards and you are following a 4,000-year-old approach."
      },
      "geometry": { "type": "Point", "coordinates": [-1.8480, 51.4235] }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "falkners-circle",
        "name": "Falkner's Circle",
        "type": "story",
        "blurb": "One lonely stone marks where a small circle of twelve once stood beside the Avenue, recorded in the 1840s and mostly broken up since. Blink and you miss it, which is rather the point of a story layer."
      },
      "geometry": { "type": "Point", "coordinates": [-1.8443, 51.4243] }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "the-sanctuary",
        "name": "The Sanctuary",
        "type": "heritage",
        "blurb": "Concrete posts on Overton Hill mark where rings of timber and stone once stood at the Avenue's end. Underwhelming to look at, fascinating to stand in; the whole complex clicks into place from here."
      },
      "geometry": { "type": "Point", "coordinates": [-1.8312, 51.4112] }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "silbury-hill",
        "name": "Silbury Hill",
        "type": "heritage",
        "blurb": "The largest artificial prehistoric mound in Europe, built in stages around 2400 BC. Nobody knows what it was for, and a century of tunnelling found no burial. No climbing; the views of it beat the views from it."
      },
      "geometry": { "type": "Point", "coordinates": [-1.8574, 51.4157] }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "west-kennet-long-barrow",
        "name": "West Kennet Long Barrow",
        "type": "heritage",
        "blurb": "A 5,500-year-old chambered tomb you can actually walk inside, one of the largest in Britain. Take a torch and mind your head.",
        "tip": "Combine with Swallowhead Springs on the way back down to the A4."
      },
      "geometry": { "type": "Point", "coordinates": [-1.8504, 51.4084] }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "swallowhead-springs",
        "name": "Swallowhead Springs",
        "type": "nature",
        "blurb": "The seasonal springs where the Kennet properly begins, hung with ribbons and offerings on the old willow. Dry as a bone some months, gin-clear in others."
      },
      "geometry": { "type": "Point", "coordinates": [-1.8555, 51.4128] }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "waden-hill",
        "name": "Waden Hill",
        "type": "nature",
        "blurb": "The whaleback ridge between the village and Silbury. The path along it gives the classic reveal of Silbury Hill and lines up beautifully with the Avenue."
      },
      "geometry": { "type": "Point", "coordinates": [-1.8555, 51.4215] }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "windmill-hill",
        "name": "Windmill Hill",
        "type": "heritage",
        "blurb": "A Neolithic causewayed enclosure older than the henge itself, where the Avebury story starts. A proper walk out across open down, usually with skylarks."
      },
      "geometry": { "type": "Point", "coordinates": [-1.8710, 51.4416] }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "longstones",
        "name": "The Longstones (Adam and Eve)",
        "type": "heritage",
        "blurb": "Two survivors of the lost Beckhampton Avenue and its cove, standing in a field west of the village. Proof the monument sprawled far beyond the bit everyone photographs."
      },
      "geometry": { "type": "Point", "coordinates": [-1.8723, 51.4278] }
    }    
  ]
};