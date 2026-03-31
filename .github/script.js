document.addEventListener("DOMContentLoaded", function () {

  // =========================
  // MODAL PROJECT
  // =========================
  const modal = document.getElementById("projectModal");
  const modalTitle = document.getElementById("modalTitle");
  const modalText = document.getElementById("modalText");
  const closeModal = document.getElementById("closeModal");

  const projectButtons = document.querySelectorAll(".view-project");

  projectButtons.forEach(btn => {
    btn.addEventListener("click", function () {
      const id = this.dataset.project;

      modal.style.display = "block";

      modalTitle.innerText = "Project " + id;

      if (id == 1) {
        modalText.innerText = "Responsive layout project with clean structure.";
      } else if (id == 2) {
        modalText.innerText = "Modern UI with animations and components.";
      } else {
        modalText.innerText = "Interactive multi-column design.";
      }
    });
  });

  closeModal.addEventListener("click", function () {
    modal.style.display = "none";
  });

  window.addEventListener("click", function (e) {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });


  // =========================
  // FORM VALIDATION
  // =========================
  const form = document.getElementById("contactForm");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const inputs = form.querySelectorAll("input, textarea");
    let valid = true;

    inputs.forEach(input => {
      if (input.value.trim() === "") {
        input.style.border = "2px solid red";
        valid = false;
      } else {
        input.style.border = "1px solid #bbb";
      }
    });

    if (valid) {
      alert("Message sent successfully!");
      form.reset();
    }
  });


  // =========================
  // SCROLL ANIMATION
  // =========================
  const sections = document.querySelectorAll(".container, .section");

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
      }
    });
  });

  sections.forEach(section => {
    section.style.opacity = "0";
    section.style.transform = "translateY(40px)";
    section.style.transition = "0.6s";

    observer.observe(section);
  });

});
