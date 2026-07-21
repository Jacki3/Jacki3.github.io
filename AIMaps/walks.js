// ---------------------------------------------------------------------------
// Waymarked walks for the Avebury pilot. Each walk is a "walking point" on
// the map: click it and the app asks the routing engine for an on-path route
// through the waypoints, draws it, and highlights the numbered stops.
//
// Waypoints are sparse on purpose - the routing engine snaps them to real
// footpaths, so you only list the start, the stops, and any turn you want
// to force. `highlights` are POI ids from pois.js, in walking order; they
// get the numbered rings when the walk is active.
//
// Generated walks (the "stitch a walk" button) reuse exactly this shape.
// ---------------------------------------------------------------------------

const WALKS = [
  {
    id: "walk-village-henge",
    name: "Village & Henge Loop",
    kind: "curated",
    time: "about 1 hour",
    blurb: "A gentle loop threading the village and all four quadrants of the henge: the big stones, the museum, the manor, the church, and a pub inside a stone circle to finish. Level going, mostly on pavement and mown grass.",
    start: [-1.8542, 51.4286],
    waypoints: [
      [-1.8542, 51.4286],  // Stone Circle
      [-1.8536, 51.4297],  // The Cove
      [-1.8577, 51.4299],  // Avebury Manor
      [-1.8565, 51.4292],  // Keiller Museum
      [-1.8570, 51.4289],  // St James' Church
      [-1.85571, 51.42813],// Henge Shop
      [-1.8556, 51.4277],  // Barber Surgeon Stone
      [-1.8541, 51.4271],  // Devil's Chair
      [-1.8531, 51.4288],  // Red Lion
      [-1.8542, 51.4286]   // back to the start
    ],
    highlights: [
      "stone-circle", "the-cove", "avebury-manor", "keiller-museum",
      "st-james", "henge-shop", "barber-stone", "devils-chair", "red-lion"
    ]
  },
  {
    id: "walk-ceremonial-circuit",
    name: "Stones to Sanctuary Circuit",
    kind: "curated",
    time: "half a day",
    blurb: "The full ceremonial landscape in one circuit: down the West Kennet Avenue the way processions came, out to the Sanctuary, into the long barrow with a torch, past the springs where the Kennet rises, under Silbury Hill and home over Waden Hill for the classic reveal. Field paths and one stretch beside the A4; boots recommended.",
    start: [-1.8541, 51.4271],
    waypoints: [
      [-1.8541, 51.4271],  // Devil's Chair (southern entrance)
      [-1.8480, 51.4235],  // West Kennet Avenue
      [-1.8443, 51.4243],  // Falkner's Circle
      [-1.8312, 51.4112],  // The Sanctuary
      [-1.8504, 51.4084],  // West Kennet Long Barrow
      [-1.8555, 51.4128],  // Swallowhead Springs
      [-1.8574, 51.4157],  // Silbury Hill viewpoint
      [-1.8555, 51.4215],  // Waden Hill
      [-1.8541, 51.4271]   // back to the henge
    ],
    highlights: [
      "devils-chair", "west-kennet-avenue", "falkners-circle", "the-sanctuary",
      "west-kennet-long-barrow", "swallowhead-springs", "silbury-hill", "waden-hill"
    ]
  },
  {
    id: "walk-windmill-longstones",
    name: "Windmill Hill & the Longstones",
    kind: "curated",
    time: "2 to 3 hours",
    blurb: "Where the Avebury story starts: out across open downland to the causewayed enclosure on Windmill Hill, oldest thing in the landscape, then down to Adam and Eve, the two survivors of the lost Beckhampton Avenue. Skylarks likely, crowds unlikely.",
    start: [-1.8577, 51.4299],
    waypoints: [
      [-1.8577, 51.4299],  // Avebury Manor
      [-1.8710, 51.4416],  // Windmill Hill
      [-1.8723, 51.4278],  // The Longstones
      [-1.8570, 51.4289],  // St James' Church
      [-1.8542, 51.4286]   // Stone Circle
    ],
    highlights: [
      "avebury-manor", "windmill-hill", "longstones", "st-james", "stone-circle"
    ]
  }
];
