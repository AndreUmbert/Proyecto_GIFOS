let buscador = document.getElementById("buscarYMas");
let tituloBusqueda = document.getElementById("tituloBusqueda");
let busquedaSection = document.getElementById("busqueda");
// let galeria = document.getElementById("galeria");
let pjsGifos = document.getElementById("pjsGifos");
let tituloInicio = document.getElementById("titulo");
let lupa = document.getElementById("lupa");
var site_nav = document.getElementById("site-nav");
let favoritos = document.getElementById("favoritos");

if (buscador.value === "") {
    favoritos.style.display = "none";
} 