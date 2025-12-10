// src/ui/list.js

export function renderFilters(containerId, categories, onSelect) {
  const container = document.getElementById(containerId);
  container.innerHTML = "";

  categories.forEach((category) => {
    const btn = document.createElement("button");
    btn.textContent = category;
    btn.style.marginRight = "8px";

    btn.addEventListener("click", () => {
      onSelect(category);
    });

    container.appendChild(btn);
  });
}

export function renderList(containerId, spots, onSelect) {
  const container = document.getElementById(containerId);
  container.innerHTML = "";

  let activeItem = null;

  spots.forEach((spot) => {
    const item = document.createElement("div");
    item.className = "list-item";

    const title = document.createElement("div");
    title.className = "spot-name";
    title.textContent = spot.name;

    const vibe = document.createElement("div");
    vibe.className = "spot-vibe";
    vibe.textContent = spot.vibe;

    item.appendChild(title);
    item.appendChild(vibe);

    item.addEventListener("click", () => {
      if (activeItem) {
        activeItem.style.fontWeight = "normal";
      }

      title.style.fontWeight = "600";
      activeItem = title;

      if (onSelect) onSelect(spot);
    });

    container.appendChild(item);
  });
}
