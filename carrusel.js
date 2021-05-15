var carrusel = document.getElementById("carruselTrendingGifos");
const URL_Trending = "https://api.giphy.com/v1/gifs/trending?api_key=umCoI8QE3nt72GLxXUntliERdZW5J6z9&limit=12";




//Cargar Carrusel con imagenes:
let mostrarTrending = async () => {
    carrusel.style.display = "flex";
    let resultado = await fetch(URL_Trending);
    let json = await resultado.json();
    json.data.forEach(trending => {
        carrusel.innerHTML += `
        <div class="divHoverContenedor">
        <img key="${trending.id}"  class="imgBuscada" src="${trending.images.fixed_height.url}" nombre="${trending.username}" corazon="false" titulo="${trending.title}" onclick="ampliar()">
        <div id="${trending.id}" nombre="${trending.username}" titulo="${trending.title}" class="divHover">
        <div id="btnsPintadosDesktop">
        <img id="btnFavPintado" src="assets/assets/icon-fav.svg">
        <img id="btnDescargarPintado" src="assets/assets/icon-download.svg">
        <img id="btnAmpliarPintado" src="assets/assets/icon-max-normal.svg">
        </div>
        <div id="infoImgPintDesktop">
        <p id="usuarioPintado">${trending.username}</p>
        <p id="tituloPintado">${trending.title}</p>
        </div>
        </div>
        </div>
    `;
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

