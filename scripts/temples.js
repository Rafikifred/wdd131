// temples.js

// Footer dates
document.querySelector("#currentyear").textContent = new Date().getFullYear();
document.querySelector("#lastModified").textContent = "Last Modified: " + document.lastModified;

// Hamburger menu toggle
const menuButton = document.querySelector("#menu");
const nav = document.querySelector("nav");

menuButton.addEventListener("click", () => {
  nav.style.display = nav.style.display === "flex" ? "none" : "flex";
  menuButton.textContent = menuButton.textContent === "✖" ? "☰" : "✖";
});
