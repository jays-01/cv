const nav = document.querySelector(".nav");
let lastScrollY = window.scrollY;

window.addEventListener("scroll", () => {
  if (lastScrollY < window.scrollY) {
    nav.classList.add("sticky-header");
  } else {
    nav.classList.remove("sticky-header");
  }

  lastScrollY = window.scrollY;
});