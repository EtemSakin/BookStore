function handleKey(event, action) {
  if (event.key === "Enter" || event.key === " ") {
    event.preventDefault();
    action();
  }
}
function toggleMenu() {
  const nav = document.getElementById("mainNav");
  const btn = document.querySelector(".burger");

  nav.classList.toggle("open");

  const isOpen = nav.classList.contains("open");
  btn.setAttribute("aria-expanded", isOpen ? "true" : "false");
}
document.querySelectorAll("#mainNav a").forEach(link => {
  link.addEventListener("click", () => {
    document.getElementById("mainNav").classList.remove("open");
    document.querySelector(".burger").setAttribute("aria-expanded", "false");
  });
});
