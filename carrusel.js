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
    let resultado = await fetch(URL_Trending);
    let json = await resultado.json();
    json.data.forEach(trending => {
        carrusel.innerHTML += `
            <img id="${trending.id}" class="imgBuscadaCarrusel" nombre="${trending.username}" titulo="${trending.title}"  src="${trending.images.fixed_height.url}">
    `;
    });
    let arrayImagenesCarrusel = document.querySelectorAll(".imgBuscadaCarrusel");
    arrayImagenesCarrusel.forEach(imagenesCarrusel => {
        if (pantallaDesktop.matches) {
            site_nav.style.display = "block";
            console.log("pantallaDesktop");
            imagenesGaleria.addEventListener('mouseover', (eventoPintar) => {
                // console.log(eventoPintar.target.getAttribute("key"));
                let divHover = document.getElementById(eventoPintar.target.getAttribute("key"));

                divHover.style.display = "block";

                divHover.addEventListener('mouseout', () => {
                    divHover.style.display = "none";
                });
            });
        }
    });
    arrayImagenesCarrusel.forEach(imagenesCarrusel => {
        imagenesCarrusel.addEventListener('click', (eventoAmpliar) => {
            console.log(eventoAmpliar.target.getAttribute("nombre"));
            sectionImagenAmplificada.style.display = "block";
            imgAmplificada.src = `${eventoAmpliar.target.src}`;
            imgAmplificada.key = `${eventoAmpliar.target.getAttribute("id")}`;
            imgAmplificada.setAttribute("key", `${eventoAmpliar.target.getAttribute("id")}`);
            nombreUsuario.innerHTML = `${eventoAmpliar.target.getAttribute("nombre")}`;
            tituloGif.innerHTML = `${eventoAmpliar.target.getAttribute("titulo")}`;
            busquedaSection.style.display = "none";
            buscadorGifos.style.display = "none";
            trendingSection.style.display = "none";
            footer.style.display = "none";
            let cruzImgAmplificadaBtn = document.getElementById('cruzImgAmplificadaBtn');
            cruzImgAmplificadaBtn.addEventListener('click', (eventoReducir) => {
                busquedaSection.style.display = "none";
                sectionImagenAmplificada.style.display = "none";
                buscadorGifos.style.display = "block";
                trendingSection.style.display = "block";
                footer.style.display = "block";
            });
            let btnFavImgAmpliada = document.getElementById("btnFavImgAmpliada");
            btnFavImgAmpliada.addEventListener('click', (eventoFavorito) => {
                // console.log(eventoAmpliar.target.getAttribute("id"));
                if (btnFavImgAmpliada.src == "http://127.0.0.1:5500/Proyecto_GIFOS/assets/assets/icon-fav-hover.svg") {
                    btnFavImgAmpliada.src = "http://127.0.0.1:5500/Proyecto_GIFOS/assets/assets/icon-fav-active.svg";
                    let idImgFavActive = `${eventoAmpliar.target.getAttribute("id")}`;
                    arrayFavoritos.push(idImgFavActive);
                    localStorage.setItem("misFavoritos", JSON.stringify(arrayFavoritos));
                    console.log(arrayFavoritos);

                } else if (btnFavImgAmpliada.src === "http://127.0.0.1:5500/Proyecto_GIFOS/assets/assets/icon-fav-active.svg") {
                    btnFavImgAmpliada.src = "http://127.0.0.1:5500/Proyecto_GIFOS/assets/assets/icon-fav-hover.svg"
                }
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


mostrarTrending();


