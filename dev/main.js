const hamburger = document.querySelectorAll("#hamburger");
const navMenu = document.querySelectorAll("#nav-menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
})

document.querySelectorAll("#nav-link").forEach(n => n.addEventListener("click", () => {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
}))
