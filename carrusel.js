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


// console.log(JSON.stringify(fetch(URL_Trending).json()));

// fetch(URL_Trending)
//     .then(response => response.json())
//     .then(data => {
//         console.log(data)
//         console.log(data.data[0].images.fixed_height.url)
//     }
//     );

let mostrarTrending = async () => {
    try {
        let resultado = await fetch(URL_Trending);
        let json = await resultado.json();
        let counter = 0;
        json.data.forEach(trending => {
            counter ++;
            carrusel.innerHTML += `
            <img id="imagenCarrusel${counter}" src="${trending.images.fixed_height.url}">
    `;
        });
    } catch (error) {
        console.log(error);
    }
}


mostrarTrending();
