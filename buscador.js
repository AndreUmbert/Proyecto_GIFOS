// //Llamar las imagenes que busca el usuario desde giphy
let buscador = document.getElementById("buscarYMas");
let buscadorGifos = document.getElementById("buscadorGifos");
let tituloBusqueda = document.getElementById("tituloBusqueda");
let busquedaSection = document.getElementById("busqueda");
let trendingSection = document.getElementById("trendingGifos");
let footer = document.getElementById("footer");
let galeria = document.getElementById("galeria");
let pjsGifos = document.getElementById("pjsGifos");
let tituloInicio = document.getElementById("titulo");
let lupa = document.getElementById("lupa");
let site_nav = document.getElementById("site-nav");
let favoritos = document.getElementById("sectionFavoritos");
const URL_BASE = "https://api.giphy.com/v1/gifs/search?api_key=umCoI8QE3nt72GLxXUntliERdZW5J6z9&limit=12&q=";
const API_KEY = "umCoI8QE3nt72GLxXUntliERdZW5J6z9";
const URL_SearchEndpoints = "https://api.giphy.com/v1/trending/searches?api_key=umCoI8QE3nt72GLxXUntliERdZW5J6z9&limit=12";
let trendingEndpoints = document.getElementById("etiquetasEjemplos");
const URL_Autocompletar = "https://api.giphy.com/v1/gifs/search/tags?api_key=umCoI8QE3nt72GLxXUntliERdZW5J6z9&limit=5&q=";
let sugerenciasBusqueda = document.getElementById("sugerenciasBusqueda");
let barraContenedora = document.getElementById("barraContenedor");
let barra = document.getElementById("barra");
let cruzAparece = document.getElementById("cruzAparece");
let separadorBusqueda = document.getElementById("separadorBusqueda");
let contadorOffset = 0;
let pantallaDesktop = window.matchMedia("(min-width: 1440px)");
let itemListaSugerido = document.getElementsByClassName('itemListaSugerido');
let itemListaBuscar = document.getElementsByClassName('itemListaBuscar');
let busqueda1 = document.getElementById('1');
let sectionImagenAmplificada = document.getElementById("sectionImagenAmplificada");
let imgAmplificada = document.getElementById("imgAmplificada");
let nombreUsuario = document.getElementById('nombreUsuario');
let tituloGif = document.getElementById("tituloGif");
let arrayFavoritos = [];
let etiquetasEjemplosTexto = document.getElementById("etiquetasEjemplosTexto");
let btnFavImgAmpliada = document.getElementById("btnFavImgAmpliada");
let busquedaFallida = document.getElementById("busquedaFallida");



//Establecer mayuscula al buscador:
buscador.style.textTransform = "capitalize";

//Al clickear sobre el buscador:
buscador.addEventListener('click', (ocultar) => {
    favoritos.style.display = "none";
    pjsGifos.style.display = "none";
    tituloInicio.style.display = "none";
    lupa.style.display = "none";
    cruzAparece.innerHTML = `
        <img src="./assets/assets/close.svg">
        `;
    cruzAparece.style.display = "block";
});

//Al clickear sobre close:
cruzAparece.addEventListener("click", (restaurar) => {
    if (buscador) {
        location.reload();
    }
})

//Predictor de escritura (solo cuando es desktop, funciona con changeText):
if (pantallaDesktop.matches) {
    buscador.addEventListener('keyup', async (autocompletar) => {
        if (autocompletar.key) {
            contadorOffset = 0;
            sugerenciasBusqueda.innerHTML = " ";
            buscador.style.margin = "0";
            buscador.style.width = "80%";
            barra.style.margin = "1.0416666vw 0 0.694444444vw 0";
            lupa.style.display = "block";
            lupa.style.order = "-1";
            lupa.style.margin = "0 1.458333vw 0 1.458333vw";
            lupa.src = "./assets/assets/icon-search.svg";
            barraContenedor.style.height = "13.88888vw";
            barraContenedora.style.borderRadius = "2rem";
            sugerenciasBusqueda.innerHTML = ``;
            sugerenciasBusqueda.style.display = "block";
            sugerenciasBusqueda.style.height = "100%";
            sugerenciasBusqueda.style.overflow = "hidden";
            sugerenciasBusqueda.style.margin = "0.972222vw 0 1.25vw 0";
            cruzAparece.style.display = "block";
            cruzAparece.style.marginLeft = "1.59722222vw";
            cruzAparece.addEventListener('click', () => {
                buscador.value = " "
            });
            separadorBusqueda.style.display = "block";
            let resultadoBusqueda = await fetch(URL_Autocompletar + autocompletar.target.value);
            let json = await resultadoBusqueda.json();
            json.data.forEach(trending => {
                contadorOffset++;
                sugerenciasBusqueda.innerHTML += `
                <div  class="itemListaSugerido">
                    <img src="./assets/assets/icon-search.svg">
                    <a><p id="${contadorOffset}" onclick="changeText(this)" class="itemListaBuscar">${trending.name}</p></a>
                </div>
                `;
            });
        }
    });
}

//Al apretar ENTER en el buscador:
buscador.addEventListener('keypress', async (buscar) => {
    if (buscar.key === 'Enter') {
        tituloGif.innerHTML = ``;
        nombreUsuario.innerHTML = ``;
        if (!pantallaDesktop.matches) {
            site_nav.style.display = "none";
        }
        busquedaSection.style.display = "Block";
        galeria.style.display = "grid";
        galeria.innerHTML = ``;
        let resultadoBusqueda = await fetch(URL_BASE + buscar.target.value);
        let json = await resultadoBusqueda.json();
        json.data.forEach(trending => {
            galeria.innerHTML += `
            <div class="divHoverContenedor">
            <img key="${trending.id}"  class="imgBuscada" src="${trending.images.fixed_height.url}" nombre="${trending.username}" corazon="false" titulo="${trending.title}" onmouseover="pintar(this)" onclick="ampliar()">
            <div id="${trending.id}" nombre="${trending.username}" titulo="${trending.title}" class="divHover" onmouseout="despintar(this)">
            <div id="btnsPintadosDesktop">
            <img id="btnFavPintado" src="assets/assets/icon-fav.svg" onclick="favDesktop(this)" key="${trending.id}">
            <img id="btnDescargarPintado" src="assets/assets/icon-download.svg" key="${trending.id}">
            <img id="btnAmpliarPintado" src="assets/assets/icon-max-normal.svg" key="${trending.id}">
            </div>
            <div id="infoImgPintDesktop">
            <p id="usuarioPintado">${trending.username}</p>
            <p id="tituloPintado">${trending.title}</p>
            </div>
            </div>
            </div>
        `;
            tituloBusqueda.innerHTML = `${buscar.target.value}`;
            tituloBusqueda.style.textTransform = "capitalize";

        });
        let hijosGaleria = document.getElementById("galeria").children;
        //Eliminar boton ver-mas si no encuentra 12 elementos minimo:
        if (hijosGaleria.length % 12 != 0) {
            btnVerMas.style.display = "none";
        }
        //Ejecutar lo siguiente si el resultado de busquedas da igual a 0:
        if (hijosGaleria.length === 0) {
            galeria.style.display = "none";
            tituloBusqueda.innerHTML = `${buscar.target.value}`;
            tituloBusqueda.style.textTransform = "capitalize";
            btnVerMas.style.display = "none";
            if (pantallaDesktop.matches) {
                busquedaFallida.style.display = "block";
            }
        }
    }
});

//Al clickear VER-MAS:
let btnVerMas = document.getElementById("btnVerMas");
btnVerMas.addEventListener('click', async (verMas) => {
    contadorOffset += 12;
    let URL_BusquedaReiterada = "https://api.giphy.com/v1/gifs/search?api_key=umCoI8QE3nt72GLxXUntliERdZW5J6z9&limit=12&offset=" + contadorOffset + "&q=";
    let resultadoBusqueda = await fetch(URL_BusquedaReiterada + buscador.value);
    let json = await resultadoBusqueda.json();
    json.data.forEach(trending => {
        galeria.innerHTML += `
        <div class="divHoverContenedor">
        <img key="${trending.id}"  class="imgBuscada" src="${trending.images.fixed_height.url}" nombre="${trending.username}" corazon="false" titulo="${trending.title}" onmouseover="pintar(this)" onclick="ampliar()">
        <div id="${trending.id}" nombre="${trending.username}" titulo="${trending.title}" class="divHover" onmouseout="despintar(this)">
        <div id="btnsPintadosDesktop">
        <img id="btnFavPintado" src="assets/assets/icon-fav.svg" onclick="favDesktop(this)" key="${trending.id}">
        <img id="btnDescargarPintado" src="assets/assets/icon-download.svg" key="${trending.id}">
        <img id="btnAmpliarPintado" src="assets/assets/icon-max-normal.svg" key="${trending.id}">
        </div>
        <div id="infoImgPintDesktop">
        <p id="usuarioPintado">${trending.username}</p>
        <p id="tituloPintado">${trending.title}</p>
        </div>
        </div>
        </div>
        `;
    });
    let hijosGaleria = document.getElementById("galeria").children;
    if (hijosGaleria.length % 12 != 0) {
        btnVerMas.style.display = "none";
    }
});

//Al clickear ENDPOINTS (funciona con changeText):
let mostrarEndpoints = async (mostrarEndpoints) => {
    try {
        let resultado = await fetch(URL_SearchEndpoints);
        let json = await resultado.json();
        for (let index = 0; index < 5; index++) {
            if (index !== 4) {
                trendingEndpoints.innerHTML += `
                <p id="etiquetasEjemplosTexto" onclick="changeText(this)">
                ${json.data[index]},</p> 
                `;
            }
            else {
                trendingEndpoints.innerHTML += `
                <p id="etiquetasEjemplosTexto" onclick="changeText(this)">
                ${json.data[index]}</p>
                `;
            }
        }
        // console.log(trendingEndpoints.querySelector('[id=etiquetasEjemplosTexto]').value);
    } catch (error) {
        console.log(error);
    }
}
mostrarEndpoints();

//cambia el buscador.value por el texto clickeado y realiza una busqueda:
async function changeText(objeto) {
    buscador.value = objeto.innerHTML;
    //Borrar la "," al final.
    if (buscador.value.charAt(buscador.value.length - 1) == ',') {
        buscador.value = buscador.value.slice(0, -1)
    }
    if (!pantallaDesktop.matches) {
        site_nav.style.display = "none";
    }
    busquedaSection.style.display = "Block";
    galeria.innerHTML = ``;
    let resultadoBusqueda = await fetch(URL_BASE + buscador.value);
    let json = await resultadoBusqueda.json();
    json.data.forEach(trending => {
        galeria.innerHTML += `
        <div class="divHoverContenedor">
            <img key="${trending.id}"  class="imgBuscada" src="${trending.images.fixed_height.url}" nombre="${trending.username}" corazon="false" titulo="${trending.title}" onmouseover="pintar(this)" onclick="ampliar()">
            <div id="${trending.id}" nombre="${trending.username}" titulo="${trending.title}" class="divHover" onmouseout="despintar(this)">
            <div id="btnsPintadosDesktop">
            <img id="btnFavPintado" src="assets/assets/icon-fav.svg" onclick="favDesktop(this)" key="${trending.id}">
            <img id="btnDescargarPintado" src="assets/assets/icon-download.svg" key="${trending.id}">
            <img id="btnAmpliarPintado" src="assets/assets/icon-max-normal.svg" key="${trending.id}">
            </div>
            <div id="infoImgPintDesktop">
            <p id="usuarioPintado">${trending.username}</p>
            <p id="tituloPintado">${trending.title}</p>
            </div>
            </div>
            </div>
        `;
        tituloBusqueda.innerHTML = `${buscador.value}`;
        tituloBusqueda.style.textTransform = "capitalize";
    });
}
