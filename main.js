const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars");
});

navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "fa-solid fa-bars");
});

// Modal functionality
const projectCards = document.querySelectorAll(".portfolio__card");
const modals = document.querySelectorAll(".modal");
const closeButtons = document.querySelectorAll(".modal__close");

projectCards.forEach(card => {
  card.addEventListener("click", () => {
    const modalId = card.getAttribute("data-modal");
    const modal = document.getElementById(modalId);
    modal.style.display = "flex";
    document.body.style.overflow = "hidden"; // Prevent scrolling on the main page
  });
});

closeButtons.forEach(button => {
  button.addEventListener("click", () => {
    const modal = button.closest(".modal");
    modal.style.display = "none";
    document.body.style.overflow = "auto"; // Restore scrolling
  });
});

// Close modal when clicking outside the modal content
modals.forEach(modal => {
  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.style.display = "none";
      document.body.style.overflow = "auto"; // Restore scrolling
    }
  });
});