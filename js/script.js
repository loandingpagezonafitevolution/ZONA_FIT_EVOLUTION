document.addEventListener("DOMContentLoaded", () => {
  const btnMenu = document.getElementById("btn-menu");
  const nav = document.getElementById("nav");

  if (btnMenu && nav) {
    btnMenu.addEventListener("click", () => {
      nav.classList.toggle("activo");
    });

    // Cierra el menú al tocar un enlace en móvil
    nav.querySelectorAll(".nav_link").forEach((link) => {
      link.addEventListener("click", () => {
        nav.classList.remove("activo");
      });
    });
  }
});
