const navbar = document.querySelector(".navbar");

const path = window.location.pathname.toLowerCase();

const transparentPages =
    path.endsWith("/") ||
    path.includes("index.html") ||
    path.includes("nosotros.html");

function updateNavbar() {
    if (!transparentPages) {

    navbar.classList.add("scrolled");


} else {
        if (window.scrollY > 50) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }
    }
}

// Se ejecuta apenas carga la página
updateNavbar();

// Se ejecuta al hacer scroll
window.addEventListener("scroll", updateNavbar);