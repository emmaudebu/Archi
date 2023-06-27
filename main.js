let menuBar = document.querySelector(".bx-menu");
let menu = document.querySelector("nav ul");

menuBar.addEventListener("click", () => {
  menu.classList.toggle("menuShow");
});
