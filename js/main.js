document.addEventListener("DOMContentLoaded", function () {
    const mobileMenuIcon = document.querySelector(".mobile-menu-icon");
    const navbar = document.querySelector(".navbar");

    // Función para mostrar el menú en versión móvil
    function showMobileMenu() {
        navbar.style.display = "block";
    }

    // Función para ocultar el menú en versión móvil
    function hideMobileMenu() {
        navbar.style.display = "none";
    }

    // Verificar si es una pantalla móvil antes de añadir eventos
    if (window.innerWidth <= 768) {
        // Agregar evento al icono de menú móvil
        mobileMenuIcon.addEventListener("mouseenter", showMobileMenu);

        // Agregar evento al menú móvil para mantenerlo visible cuando el mouse está sobre él
        navbar.addEventListener("mouseenter", showMobileMenu);

        // Agregar evento para ocultar el menú móvil cuando el mouse sale del menú
        navbar.addEventListener("mouseleave", hideMobileMenu);

        // Ocultar el menú móvil al cargar la página
        hideMobileMenu();
    }
});