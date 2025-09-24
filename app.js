// FOOTER COPYRIGHT TEXT
const year = document.querySelector(".year");
const currentYear = new Date().getFullYear();
year.innerHTML = currentYear;

const navMenu = document.querySelector(".nav-menu");
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelectorAll(".nav-link");

// Toggle nav on hamburger click
hamburger.addEventListener("click", () => {
  navMenu.classList.toggle("active");
  hamburger.classList.toggle("active");
});

// Close nav when a link is clicked
navLinks.forEach(link => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("active");
    hamburger.classList.remove("active");
  });
});
