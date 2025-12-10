// src/ui/modal.js

export function openModal(spot) {
  const modal = document.getElementById("modal");
  const body = document.getElementById("modal-body");

  console.log("openModal called");

  body.innerHTML = `
    <h2>${spot.name}</h2>
    <p><em>${spot.vibe}</em></p>
    <p>${spot.description}</p>
  `;

  modal.classList.remove("hidden");
}

export function setupModalClose() {
  const modal = document.getElementById("modal");
  const closeBtn = document.getElementById("modal-close");

  console.log("setupModalClose called");
  console.log("modal:", modal);
  console.log("closeBtn:", closeBtn);

  closeBtn.onclick = () => {
    console.log("CLOSE BUTTON CLICKED");
    modal.classList.add("hidden");
  };

  modal.onclick = (e) => {
    if (e.target === modal) {
      console.log("MODAL BACKDROP CLICKED");
      modal.classList.add("hidden");
    }
  };
}
