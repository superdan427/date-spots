// src/map/map.js

export function createMap(containerId) {
  mapboxgl.accessToken = "pk.eyJ1Ijoic3VwZXJkYW40MjciLCJhIjoiY21qMDJvajJqMDN0azNlcXpwbmllNmt6ZSJ9.1dYovPj0P4mukRYCXjSgrw";

  const map = new mapboxgl.Map({
    container: containerId,
    style: "mapbox://styles/mapbox/light-v11",
    center: [-0.1276, 51.5072], // London
    zoom: 11,
    interactive: true
  });

  // Optional but nice: zoom/compass controls
  map.addControl(new mapboxgl.NavigationControl(), "bottom-right");

  return map;
}

export function addMarkers(map, spots, onSelect) {
  const markers = [];

  spots.forEach((spot) => {
    const el = document.createElement("div");
    el.className = "custom-marker";

    // CLICK ONLY – let Mapbox handle drag normally
    el.addEventListener("click", (e) => {
      e.stopPropagation();
      if (onSelect) onSelect(spot);
    });

    const marker = new mapboxgl.Marker(el)
      .setLngLat([spot.lng, spot.lat])
      .addTo(map);

    markers.push(marker);
  });

  return markers;
}

export function removeMarkers(markers) {
  markers.forEach((marker) => marker.remove());
}

export function flyToSpot(map, spot) {
  map.flyTo({
    center: [spot.lng, spot.lat],
    zoom: 14,
  });
}
