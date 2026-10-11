
const menuBtn = document.getElementById("menuBtn");
const nav = document.getElementById("nav");

menuBtn.addEventListener("click", function () {
  nav.classList.toggle("open");

  const isOpen = nav.classList.contains("open");
  menuBtn.setAttribute("aria-expanded", isOpen);
  menuBtn.textContent = isOpen ? "✕" : "☰";
});

nav.querySelectorAll("a").forEach(function (link) {
  link.addEventListener("click", function () {
    nav.classList.remove("open");
    menuBtn.setAttribute("aria-expanded", "false");
    menuBtn.textContent = "☰";
  });
});

document.getElementById("year").textContent =
  new Date().getFullYear();