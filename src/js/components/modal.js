const modalFrame = document.querySelector(".modal-frame");
const modalTrigger = document.querySelectorAll(".modal-trigger");

function toggelmodal() {
  modalFrame.classList.toggle("active");
}

modalTrigger.forEach((trigger) =>
  trigger.addEventListener("click", toggelmodal),
);
