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
// var btnMisGifos = document.getElementById("itemListaMisGifos");
// var sectionMisGifos =document.getElementById("sectionMisGifos");

var carrusel = document.getElementById("carruselTrendingGifos");
const URL_Trending = "https://api.giphy.com/v1/gifs/trending?api_key=umCoI8QE3nt72GLxXUntliERdZW5J6z9&limit=3";



 

let mostrarTrending = async () => {
    try {
        let resultado = await fetch(URL_Trending);
        let json = await resultado.json();
        json.data.forEach(trending => {
            carrusel.innerHTML += `
            <img id="${trending.id}"  src="${trending.images.fixed_height.url}">
    `;
        });
    } catch (error) {
        console.log(error);
    }
}


mostrarTrending();
