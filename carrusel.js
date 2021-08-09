var carrusel = document.getElementById("carruselTrendingGifos");
const URL_Trending = "https://api.giphy.com/v1/gifs/trending?api_key=umCoI8QE3nt72GLxXUntliERdZW5J6z9&limit=12";




//Cargar Carrusel con imagenes:
let mostrarTrending = async () => {
    carrusel.style.display = "flex";
    let resultado = await fetch(URL_Trending);
    let json = await resultado.json();
    json.data.forEach(trending => {
        let isFavorito = arrayFavoritos.includes(trending.id);
        carrusel.innerHTML += `
        <div class="divHoverContenedor">
        <img key="${trending.id}"  class="imgBuscada" src="${trending.images.fixed_height.url}" nombre="${trending.username}" corazon="false" titulo="${trending.title}" onmouseover="pintar(this)" onclick="ampliar()">
        <div key="${trending.id}" id="${trending.id}" nombre="${trending.username}" titulo="${trending.title}" class="divHover" onmouseout="despintar(this)">
        <div id="btnsPintadosDesktop" key="${trending.id}">
        <img class="btnFavPintado" src=${!isFavorito ? "assets/assets/icon-fav.svg" : "assets/assets/icon-fav-active.svg"} onclick="favDesktop(this)" key="${trending.id}">
        <img id="btnDescargarPintado" src="assets/assets/icon-download.svg" onclick="downloadDesktop(this)" key="${trending.id}">
        <img id="btnAmpliarPintado"  titulo="${trending.title}" nombre="${trending.username}" path="${trending.images.fixed_height.url}" onclick="ampliarDesktop(this)" src="assets/assets/icon-max-normal.svg" key="${trending.id}">
        </div>
        <div id="infoImgPintDesktop">
        <p id="usuarioPintado">${trending.username}</p>
        <p id="tituloPintado">${trending.title}</p>
        </div>
        </div>
        </div>
    `;
    });
    let btnFavPintado = document.getElementsByClassName("btnFavPintado");
    var arr = Array.prototype.slice.call(btnFavPintado);
    arr.forEach(btnFavPintado => {
        if (arrayFavoritos.includes(btnFavPintado.getAttribute("key")) && pantallaDesktop.matches) {
            btnFavPintado.style.border = "none";
            btnFavPintado.style.borderRadius = "0.3rem";
            btnFavPintado.style.opacity = "0.7";
            btnFavPintado.style.width = "1.25vw";
            btnFavPintado.style.height = "1.10416666666vw";
            btnFavPintado.style.padding = "0.55555555vw 0.48611111vw";
            btnFavPintado.style.backgroundColor = "#ffffff";
            btnFavPintado.style.margin = "0";
        } else if (!arrayFavoritos.includes(btnFavPintado.getAttribute("key")) && pantallaDesktop.matches) {
            btnFavPintado.style.border = "0";
            btnFavPintado.style.borderRadius = "0.3rem";
            btnFavPintado.style.opacity = "1";
            btnFavPintado.style.width = "2.222222vw";
            btnFavPintado.style.height = "2.222222vw";
            btnFavPintado.style.padding = "0";
            btnFavPintado.style.backgroundColor = "#ffffff";
            btnFavPintado.style.opacity = "0.7";
            btnFavPintado.style.margin = "0";
        }
        btnFavPintado.addEventListener('click', () => {
            if (arrayFavoritos.includes(btnFavPintado.getAttribute("key")) && pantallaDesktop.matches) {
                btnFavPintado.style.border = "none";
                btnFavPintado.style.borderRadius = "0.3rem";
                btnFavPintado.style.opacity = "0.7";
                btnFavPintado.style.width = "1.25vw";
                btnFavPintado.style.height = "1.10416666666vw";
                btnFavPintado.style.padding = "0.55555555vw 0.48611111vw";
                btnFavPintado.style.backgroundColor = "#ffffff";
            } else if (!arrayFavoritos.includes(btnFavPintado.getAttribute("key")) && pantallaDesktop.matches) {
                btnFavPintado.style.border = "0";
                btnFavPintado.style.borderRadius = "0.3rem";
                btnFavPintado.style.opacity = "1";
                btnFavPintado.style.width = "2.222222vw";
                btnFavPintado.style.height = "2.222222vw";
                btnFavPintado.style.padding = "0";
                btnFavPintado.style.backgroundColor = "#ffffff";
                btnFavPintado.style.opacity = "0.7";
            }
        });
    });
}
mostrarTrending();




//Funciones de scroll para el carrusel:
const flechaIzquierda = document.getElementById("flechaIzquierda");
const flechaDerecha = document.getElementById("flechaDerecha");

flechaIzquierda.addEventListener("click", (desplazarIzquierda) => {
    carrusel.scrollBy(-1150, 0);
})

flechaDerecha.addEventListener("click", (desplazarDerecha) => {
    carrusel.scrollBy(1150, 0);
})

