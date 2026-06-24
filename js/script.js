document.addEventListener("DOMContentLoaded", () => {
  // --- 1. Lógica del Menú de Navegación ---
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

  // --- 2. Lógica para Tarjetas Desplegables de FAQ ---
  const detalles = document.querySelectorAll(".tarjeta_faq");

  detalles.forEach((detalle) => {
    const resumen = detalle.querySelector(".faq_pregunta");

    resumen.addEventListener("click", (e) => {
      // Permitimos el comportamiento nativo de <details>
      // pero añadimos una clase para gestionar animaciones si lo deseas
      if (detalle.hasAttribute("open")) {
        // Se está cerrando
        detalle.classList.remove("abierto");
      } else {
        // Se está abriendo
        // Opcional: Cerrar otros acordeones si quieres que solo uno esté abierto a la vez
        // detalles.forEach(d => d.removeAttribute('open'));

        setTimeout(() => {
          detalle.classList.add("abierto");
        }, 10);
      }
    });
  });
  // Acordeón FQA
  const items = document.querySelectorAll(".fqa_item");

  items.forEach((item) => {
    const btn = item.querySelector(".fqa_pregunta");
    const respuesta = item.querySelector(".fqa_respuesta");

    btn.addEventListener("click", () => {
      const abierto = btn.getAttribute("aria-expanded") === "true";

      // Cierra todos los demás
      items.forEach((otro) => {
        otro
          .querySelector(".fqa_pregunta")
          .setAttribute("aria-expanded", "false");
        otro.querySelector(".fqa_respuesta").classList.remove("abierto");
      });

      // Abre el actual si estaba cerrado
      if (!abierto) {
        btn.setAttribute("aria-expanded", "true");
        respuesta.classList.add("abierto");
      }
    });
  });
});
