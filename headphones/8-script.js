const burgerMenu = document.getElementById("burger-menu");
const navLinks = document.getElementById("nav-links");

burgerMenu.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

window.addEventListener("click", (event) => {
  if (
    !burgerMenu.contains(event.target) &&
    !navLinks.contains(event.target)
  ) {
    navLinks.classList.remove("active");
  }
});
