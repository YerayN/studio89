// Esperamos a que el documento HTML esté completamente cargado
document.addEventListener('DOMContentLoaded', () => {

    // Seleccionamos los elementos del menú
    const menuToggle = document.querySelector('#mobile-menu');
    const menuLinks = document.querySelector('.menu');

    // Función que se ejecuta al hacer clic en el menú hamburguesa
    menuToggle.addEventListener('click', () => {
        // Toglea la clase 'active' en el menú (para mostrarlo/ocultarlo)
        menuLinks.classList.toggle('active');
        // Opcional: Anima las barras de la hamburguesa
        menuToggle.classList.toggle('is-active');
    });

});