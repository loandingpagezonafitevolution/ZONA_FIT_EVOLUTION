document.addEventListener("DOMContentLoaded", () => {


  // --- Conexión con el Backend ---

// Obtener el elemento donde se mostrará el estado
const estadoBackend = document.getElementById("estado-backend");

// Verificar que el elemento exista en la página
if (estadoBackend) {

  // Consumir el endpoint de estado del backend
  fetch("http://localhost:5000/api/estado")
    .then((res) => res.json())

    // Mostrar respuesta exitosa
    .then((data) => {
      estadoBackend.textContent =
        `✅ Backend conectado: ${data.sistema} (${data.estado})`;
    })

    // Mostrar mensaje si ocurre un error
    .catch(() => {
      estadoBackend.textContent =
        "⚠️ No se pudo conectar con el backend";
    });
}
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
