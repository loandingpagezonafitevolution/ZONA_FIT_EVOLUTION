document.addEventListener("DOMContentLoaded", () => {
  const btnMenu = document.getElementById("btn-menu");
  const nav = document.getElementById("nav");

  // Verificar que los elementos existen para evitar errores
  if (btnMenu && nav) {
    btnMenu.addEventListener("click", () => {
      nav.classList.toggle("activo");
    });
  }
});
