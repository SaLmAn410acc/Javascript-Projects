const openModal = document.querySelector("#open-modal");
const closeModal = document.querySelector("#close-modal");

const modal = document.querySelector(".modal-div");
const modalOverlay = document.querySelector(".modal-overlay");

// console.log(openModal);
// console.log(modal);
// console.log(modalOverlay);

openModal.addEventListener("click", function () {
  modal.style.visibility = "visible";
  modalOverlay.style.visibility = "visible";
});

closeModal.addEventListener("click", function () {
  modal.style.visibility = "hidden";
  modalOverlay.style.visibility = "hidden";
});
