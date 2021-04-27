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

let searchBar = document.getElementById("searchBar");
let btnFavoritos = document.getElementById("itemListaFavoritos");
let etiquetasInicio = document.getElementById("etiquetasInicio");
let galeriaFav = document.getElementById("galeriaFav");
let itemListaFavoritos = document.getElementById("itemListaFavoritos");

btnFavoritos.addEventListener('click', async (desplegarFavoritos) => {
    sectionMisGifos.style.display = "none";
    sectionFavoritos.style.display = "block";
    site_nav.style.display = "none";
    busquedaSection.style.display = "none";
    tituloInicio.style.display = "none";
    pjsGifos.style.display = "none";
    searchBar.style.display = "none";
    etiquetasInicio.style.display = "none";
});


if (buscador.value === "") {
    sectionFavoritos.style.display = "none";
}

itemListaFavoritos.addEventListener("click", () => {
    actualizarFavoritos();

});

function actualizarFavoritos() {
    if (arrayFavoritos.length === 0) {
        console.log("no hay favoritos");
        //Aca hay que mostrar el mensaje
    } else {
        arrayFavoritos.forEach(gifFav => {
            showFavoritos(gifFav);
        });
    }
}


async function showFavoritos(gifFav) {
    try {
        const URL_SearchId = `https://api.giphy.com/v1/gifs/${gifFav}?api_key=umCoI8QE3nt72GLxXUntliERdZW5J6z9`;
        const favorito = await fetch(URL_SearchId);
        let trending = await favorito.json();
        // console.log(trending);
        galeriaFav.innerHTML += ` <div class="divHoverContenedor">
        <img key="${trending.id}"  class="imgBuscada" src="${trending.data.images.fixed_height.url}" nombre="${trending.username}" titulo="${trending.title}">
        <div id="${trending.id}" class="divHover"></div>
        </div>`;
        
    } catch (error) {
        console.log(error);
    }
}