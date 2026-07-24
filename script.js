// =========================================
// MENU MOBILE
// =========================================

const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click", () => {

    navLinks.classList.toggle("active");

    const icon = menuToggle.querySelector("i");

    if (navLinks.classList.contains("active")) {
        icon.classList.remove("fa-bars");
        icon.classList.add("fa-xmark");
    } else {
        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");
    }

});


// =========================================
// FECHAR MENU AO CLICAR EM UM LINK
// =========================================

const links = document.querySelectorAll(".nav-links a");

links.forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");

        const icon = menuToggle.querySelector("i");

        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");

    });

});


// =========================================
// ANIMAÇÃO AO ROLAR A PÁGINA
// =========================================

const revealElements = document.querySelectorAll(".reveal");

function revealOnScroll() {

    const windowHeight = window.innerHeight;

    revealElements.forEach(element => {

        const elementTop = element.getBoundingClientRect().top;

        if (elementTop < windowHeight - 80) {
            element.classList.add("active");
        }

    });

}

window.addEventListener("scroll", revealOnScroll);

revealOnScroll();


// =========================================
// BOTÃO VOLTAR AO TOPO
// =========================================

const backToTop = document.getElementById("back-to-top");

window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {
        backToTop.classList.add("active");
    } else {
        backToTop.classList.remove("active");
    }

});

backToTop.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});


// =========================================
// HEADER AO ROLAR
// =========================================

const header = document.getElementById("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {
        header.style.background = "rgba(8, 8, 8, 0.95)";
    } else {
        header.style.background = "rgba(8, 8, 8, 0.75)";
    }

});


// =========================================
// ANO AUTOMÁTICO NO FOOTER
// =========================================

const currentYear = new Date().getFullYear();

const footerText = document.querySelector(".footer p");

if (footerText) {
    footerText.textContent =
        `© ${currentYear} Filipi Lima. Todos os direitos reservados.`;
}