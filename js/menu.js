const openMenu = document.querySelector("#open-menu");
const closeMenu = document.querySelector("#close-menu");
const aside = document.querySelector("aside");
const openNav = document.querySelector("#open-nav");
const closeNav = document.querySelector("#close-nav");
const nav = document.querySelector("nav");

// MENU NAV
openNav.addEventListener("click", () => {
    nav.classList.add("nav-visible");
})
closeNav.addEventListener("click", () => {
    nav.classList.remove("nav-visible");
})
botonesCategorias.forEach(boton => boton.addEventListener("click", () => {
    nav.classList.remove("nav-visible");
}));

// MENU CATEGORIAS
openMenu.addEventListener("click", () => {
    aside.classList.add("aside-visible");
})
closeMenu.addEventListener("click", () => {
    aside.classList.remove("aside-visible");
})
botonesCategorias.forEach(boton => boton.addEventListener("click", () => {
    aside.classList.remove("aside-visible");
}));
