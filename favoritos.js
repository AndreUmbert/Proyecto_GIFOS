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
    menu.src = "./assets/assets/burger.svg";
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

    const URL_SearchId = `https://api.giphy.com/v1/gifs/${gifFav}?api_key=umCoI8QE3nt72GLxXUntliERdZW5J6z9`;
    const favorito = await fetch(URL_SearchId);
    let trending = await favorito.json();
    // console.log(trending);
    galeriaFav.innerHTML += ` 
        <div class="divHoverContenedor">
        <img key="${trending.data.id}" corazon="true"  class="imgBuscada" src="${trending.data.images.fixed_height.url}" nombre="${trending.data.username}" titulo="${trending.data.title}">
        <div id="${trending.id}" class="divHover"></div>
        </div>`;
    let arrayImagenesFavoritos = document.querySelectorAll(".imgBuscada");
    arrayImagenesFavoritos.forEach(imagenesFavoritos => {
        imagenesFavoritos.addEventListener('click', (eventoAmpliar) => {
            console.log(trending);
            console.log(eventoAmpliar.target.getAttribute("nombre"));
            sectionImagenAmplificada.style.display = "block";
            imgAmplificada.src = `${eventoAmpliar.target.src}`;
            imgAmplificada.setAttribute("corazon", "true");
            imgAmplificada.key = `${eventoAmpliar.target.getAttribute("key")}`;
            imgAmplificada.setAttribute("key", `${eventoAmpliar.target.getAttribute("key")}`);
            nombreUsuario.innerHTML = `${eventoAmpliar.target.getAttribute("nombre")}`;
            tituloGif.innerHTML = `${eventoAmpliar.target.getAttribute("titulo")}`;
            galeriaFav.style.display = "none";
            busquedaSection.style.display = "none";
            buscadorGifos.style.display = "none";
            trendingSection.style.display = "none";
            footer.style.display = "none";
            let btnFavImgAmpliada = document.getElementById("btnFavImgAmpliada");
            btnFavImgAmpliada.src = "http://127.0.0.1:5500/Proyecto_GIFOS/assets/assets/icon-fav-active.svg";
            let cruzImgAmplificadaBtn = document.getElementById('cruzImgAmplificadaBtn');
            cruzImgAmplificadaBtn.addEventListener('click', (eventoReducir) => {
                busquedaSection.style.display = "none";
                sectionImagenAmplificada.style.display = "none";
                buscadorGifos.style.display = "none";
                trendingSection.style.display = "block";
                footer.style.display = "block";
                galeriaFav.style.display = "grid";
            });
            btnFavImgAmpliada.addEventListener('click', (eventoFavorito) => {
                // console.log(btnFavImgAmpliada.src);
                // if (eventoAmpliar.target.getAttribute("corazon") == "true") {
                //     console.log(arrayFavoritos);
                //     const index = arrayFavoritos.indexOf(eventoAmpliar.target.getAttribute("key"));
                //     console.log(index);
                // }
                eliminarElementoArray(eventoAmpliar.target.getAttribute("key"));
            });
            let btnDescargarImgAmpliada = document.getElementById("btnDescargarImgAmpliada");
            // console.log(btnDescargarImgAmpliada);
            btnDescargarImgAmpliada.addEventListener('click', (eventoDescargar) => {
                console.log("click");
                console.log(eventoDescargar);
                download();
            })
        });
    });
}

function eliminarElementoArray(idElementoFavorito) {

    console.log(arrayFavoritos);
    const index = arrayFavoritos.indexOf(idElementoFavorito);
    console.log(index);
}
