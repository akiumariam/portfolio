/* =========================
   THEME TOGGLE
   ========================= */

const toggleButton = document.getElementById("theme-toggle");
const root = document.documentElement;

const savedTheme = localStorage.getItem("theme");
if (savedTheme) {
  root.setAttribute("data-theme", savedTheme);
  toggleButton.textContent = savedTheme === "dark" ? "☀️" : "🌙";
}

toggleButton.addEventListener("click", () => {
  const isDark = root.getAttribute("data-theme") === "dark";

  if (isDark) {
    root.removeAttribute("data-theme");
    localStorage.setItem("theme", "light");
    toggleButton.textContent = "🌙";
  } else {
    root.setAttribute("data-theme", "dark");
    localStorage.setItem("theme", "dark");
    toggleButton.textContent = "☀️";
  }
});

/* =========================
   MOBILE MENU TOGGLE
   ========================= */

const menuButton = document.getElementById("menu-toggle");
const navList = document.getElementById("primary-navigation");

menuButton.addEventListener("click", () => {
  const isOpen = navList.classList.contains("open");

  navList.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", String(!isOpen));
});

navList.addEventListener("click", (e) => {
  if (e.target.tagName === "A") {
    navList.classList.remove("open");
    menuButton.setAttribute("aria-expanded", "false");
  }
});
