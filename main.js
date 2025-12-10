// -------------------------------
// IMPORTS
// -------------------------------

import { dateSpots } from "./data/dateSpots.js";
import { renderList, renderFilters } from "./ui/list.js";
import {
  createMap,
  addMarkers,
  removeMarkers,
  flyToSpot
} from "./map/map.js";
import { openModal, setupModalClose } from "./ui/modal.js";
import { updateVisuals } from "./visual/p5Sketch.js";



// -------------------------------
// INITIALISE CORE SYSTEMS
// -------------------------------

// Create the map
const map = createMap("map");

// Set up modal close behaviour
setupModalClose();



// -------------------------------
// DERIVED DATA
// -------------------------------

// Unique categories for filters
const categories = ["all", ...new Set(dateSpots.map((s) => s.category))];

// Keep track of markers currently on the map
let currentMarkers = [];



// -------------------------------
// CORE UI UPDATE FUNCTION
// -------------------------------

function updateUI(spots) {
  // Render the list and wire list clicks
  renderList("list-items", spots, (spot) => {
    flyToSpot(map, spot);
    openModal(spot);
  });

  // Clean up old markers
  removeMarkers(currentMarkers);

  // Add new markers and wire marker clicks
  currentMarkers = addMarkers(map, spots, (spot) => {
    flyToSpot(map, spot);
    openModal(spot);
  });

  // Update p5 visuals
  updateVisuals(spots);
}



// -------------------------------
// FILTER CONTROLS
// -------------------------------

renderFilters("filters", categories, (category) => {
  const filtered =
    category === "all"
      ? dateSpots
      : dateSpots.filter((spot) => spot.category === category);

  updateUI(filtered);
});



// -------------------------------
// INITIAL LOAD
// -------------------------------

// Show all spots on first load
updateUI(dateSpots);
