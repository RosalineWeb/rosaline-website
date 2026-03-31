document.addEventListener("DOMContentLoaded", () => {

  const modal = document.getElementById("projectModal");
  const title = document.getElementById("modalTitle");
  const text = document.getElementById("modalText");
  const close = document.getElementById("closeModal");

  const buttons = document.querySelectorAll(".view-project");

  buttons.forEach(btn => {
    btn.addEventListener("click", () => {

      const id = btn.dataset.project;

      modal.style.display = "block";

      if (id === "1") {
        title.innerText = "Project 1";
        text.innerText = "Responsive layout project";
      }

      if (id === "2") {
        title.innerText = "Project 2";
        text.innerText = "Modern UI with animations";
      }

      if (id === "3") {
        title.innerText = "Project 3";
        text.innerText = "Interactive multi-column design";
      }
    });
  });

  close.addEventListener("click", () => {
    modal.style.display = "none";
  });

  window.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });

});
