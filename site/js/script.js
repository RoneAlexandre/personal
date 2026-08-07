/* ============================================================
   RONE BATISTA — scripts do site (JavaScript puro, sem frameworks)
   ============================================================ */

// 1) Menu mobile (abrir/fechar)
const navToggle = document.getElementById("nav-toggle");
const navLinks = document.getElementById("nav-links");

navToggle.addEventListener("click", () => {
    navToggle.classList.toggle("open");
    navLinks.classList.toggle("open");
});

// Fecha o menu ao clicar em um link
navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
        navToggle.classList.remove("open");
        navLinks.classList.remove("open");
    });
});

// 2) Fundo do menu ao rolar a página
const nav = document.getElementById("nav");
window.addEventListener(
    "scroll",
    () => {
        nav.classList.toggle("scrolled", window.scrollY > 40);
    },
    { passive: true }
);

// 3) Parallax sutil na imagem do topo
const heroImg = document.querySelector(".hero-bg img");
window.addEventListener(
    "scroll",
    () => {
        const y = window.scrollY;
        if (y < window.innerHeight) {
            heroImg.style.transform = `translateY(${y * 0.22}px)`;
        }
    },
    { passive: true }
);

// 4) Animação de aparecer ao rolar (scroll reveal)
const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target);
            }
        });
    },
    { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
);

document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));

// 5) Ano atual no rodapé
document.getElementById("year").textContent = new Date().getFullYear();
