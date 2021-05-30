//VARIABLES:
// var buscador = document.getElementById("buscarYMas");
// var tituloBusqueda = document.getElementById("tituloBusqueda");
// var busquedaSection = document.getElementById("busqueda");
// var galeria = document.getElementById("galeria");
// var pjsGifos = document.getElementById("pjsGifos");
// var tituloInicio = document.getElementById("titulo");
// var lupa = document.getElementById("lupa");
// var site_nav = document.getElementById("site-nav");
// var favoritos = document.getElementById("sectionFavoritos");
// var searchBar = document.getElementById("searchBar");
// var btnFavoritos = document.getElementById("itemListaFavoritos");
// var etiquetasInicio = document.getElementById("etiquetasInicio");

var btnMisGifos = document.getElementById("itemListaMisGifos");
var sectionMisGifos = document.getElementById("sectionMisGifos");

btnMisGifos.addEventListener("click", (mostrarMisGifos) => {
    creadorGifos.style.display = "none";
    menu.src = "./assets/assets/burger.svg";
    sectionFavoritos.style.display = "none";
    sectionMisGifos.style.display = "block";
    site_nav.style.display = "none";
    busquedaSection.style.display = "none";
    tituloInicio.style.display = "none";
    pjsGifos.style.display = "none";
    searchBar.style.display = "none";
    etiquetasInicio.style.display = "none";
    if (pantallaDesktop.matches) {
        site_nav.style.display = "block";
    }
});

if (buscador.value === "") {
    sectionMisGifos.style.display = "none";
}
