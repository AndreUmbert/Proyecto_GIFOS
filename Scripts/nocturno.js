const modo = document.getElementById("modo");
const body = document.getElementById("body");
const container = document.getElementById("container");
const logo = document.getElementById("logo");
const burger = document.getElementById("burger");
const navLista = document.getElementById("navLista");
const buscarYMas = document.getElementById("buscarYMas");
const textoTitulo = document.getElementById("textoTitulo");
const buscadorEtiquetasHome = document.getElementById("buscadorEtiquetasHome");
const etiquetasEjemplos = document.getElementById("etiquetasEjemplos");
const trendingGifos = document.getElementById("trendingGifos");
const tituloTrendingGifos = document.getElementById("tituloTrendingGifos");
const infoFooter = document.getElementById("infoFooter");
const tituloFavoritos = document.getElementById("tituloFavoritos");
const lupasSugeridas = document.getElementsByClassName("lupasSugeridas");
const imgVerMas = document.getElementById("imgVerMas");
const cruzImgAmplificadaBtn = document.getElementById("cruzImgAmplificadaBtn");

modo.setAttribute("darkmode", "false");

logo.addEventListener('click', () => {
    location.reload();
});

load();

//----------------------------------------------------------------------------------------------------------------------------------------------------------------------
//                                               FUNCIONALIDAD MODO NOCTURNO, SWITCH IMAGENES Y GUARDADO DE MODO EN LOCAL STORAGE
//----------------------------------------------------------------------------------------------------------------------------------------------------------------------

function cambiarModo() {
    if (localStorage.getItem("darkmode") === "true") {
        if (modo.innerHTML === "Modo Diurno") {
            modo.innerHTML = `Modo Nocturno`;
        } else {
            modo.setAttribute("darkmode", "true");
            logo.setAttribute("darkmode", "true");
            lupa.src = "./assets/assets/icon-search-mod-noc.svg";
            imgBtnCrearGifos.src = "./assets/assets/CTA-crear-gifo-modo-noc.svg";
            logo.src = "./assets/assets/logo-mobile-modo-noct.svg";
            burger.src = "./assets/assets/burger-modo-noct.svg";
            modo.innerHTML = `Modo Diurno`;
            cruzAparece.innerHTML = `
            <img id="cruzBuscador" src="./assets/assets/close-modo-noct.svg">
            `;
            imgVerMas.src = "./assets/assets/CTA-ver+-modo-noc.svg";
            flechaIzquierda.src = "./assets/assets/button-slider-left-md-noct.svg";
            flechaDerecha.src = "./assets/assets/button-slider-right-md-noct.svg";
            verMasFav.src = "./assets/assets/CTA-ver+-modo-noc.svg";
            verMasMisGifos.src = "./assets/assets/CTA-ver+-modo-noc.svg";
            imgCamara.src = "./assets/assets/camara-modo-noc.svg";
            imgPelicula.src = "./assets/assets/pelicula-modo-noc.svg";
            imgCloseDesktop.src = "./assets/assets/close-modo-noct.svg";
            imgFlechaIzqDesktop.src = "./assets/assets/button-slider-left-md-noct.svg";
            imgFlechaDerDesktop.src = "./assets/assets/button-slider-right-md-noct.svg";
            cruzImgAmplificadaBtn.src = "./assets/assets/close-modo-noct.svg";
        }
    } else {
        if (modo.innerHTML === "Modo Nocturno") {
            modo.innerHTML = `Modo Diurno`;
        } else {
            modo.innerHTML = `Modo Nocturno`;
            logo.setAttribute("darkmode", "false");
            modo.setAttribute("darkmode", "false");
            lupa.src = "./assets/assets/icon-search.svg";
            imgBtnCrearGifos.src = "./assets/assets/button-crear-gifo.svg";
            logo.src = "./assets/assets/logo-mobile.svg";
            burger.src = "./assets/assets/burger.svg";
            cruzAparece.innerHTML = `
            <img id="cruzBuscador" src="./assets/assets/close.svg">
            `;
            imgVerMas.src = "./assets/assets/CTA-ver-mas.svg";
            flechaIzquierda.src = "./assets/assets/button-slider-left.svg";
            flechaDerecha.src = "./assets/assets/Button-Slider-right.svg";
            verMasFav.src = "./assets/assets/CTA-ver-mas.svg";
            verMasMisGifos.src = "./assets/assets/CTA-ver-mas.svg";
            imgCamara.src = "./assets/assets/camara.svg";
            imgPelicula.src = "./assets/assets/pelicula.svg";
            imgCloseDesktop.src = "./assets/assets/close.svg";
            imgFlechaIzqDesktop.src = "./assets/assets/button-slider-left.svg";
            imgFlechaDerDesktop.src = "./assets/assets/Button-Slider-right.svg";
            cruzImgAmplificadaBtn.src = "./assets/assets/close.svg";
        }
    }
}


if (localStorage.getItem("darkmode") === "true") {
    lupa.src = "./assets/assets/icon-search-mod-noc.svg";
    imgBtnCrearGifos.src = "./assets/assets/CTA-crear-gifo-modo-noc.svg";
    logo.src = "./assets/assets/logo-mobile-modo-noct.svg";
    burger.src = "./assets/assets/burger-modo-noct.svg";
    imgVerMas.src = "./assets/assets/CTA-ver+-modo-noc.svg";
    flechaDerecha.src = "./assets/assets/button-slider-right-md-noct.svg";
    flechaIzquierda.src = "./assets/assets/button-slider-left-md-noct.svg";
    verMasFav.src = "./assets/assets/CTA-ver+-modo-noc.svg";
    verMasMisGifos.src = "./assets/assets/CTA-ver+-modo-noc.svg";
    imgCamara.src = "./assets/assets/camara-modo-noc.svg";
    imgPelicula.src = "./assets/assets/pelicula-modo-noc.svg";
    imgCloseDesktop.src = "./assets/assets/close-modo-noct.svg";
    imgFlechaIzqDesktop.src = "./assets/assets/button-slider-left-md-noct.svg";
    imgFlechaDerDesktop.src = "./assets/assets/button-slider-right-md-noct.svg";
    cruzImgAmplificadaBtn.src = "./assets/assets/close-modo-noct.svg";
} else {
    lupa.src = "./assets/assets/icon-search.svg";
    imgBtnCrearGifos.src = "./assets/assets/button-crear-gifo.svg";
    logo.src = "./assets/assets/logo-mobile.svg";
    burger.src = "./assets/assets/burger.svg";
    imgVerMas.src = "./assets/assets/CTA-ver-mas.svg";
    flechaIzquierda.src = "./assets/assets/button-slider-left.svg";
    flechaDerecha.src = "./assets/assets/Button-Slider-right.svg";
    verMasFav.src = "./assets/assets/CTA-ver-mas.svg";
    verMasMisGifos.src = "./assets/assets/CTA-ver-mas.svg";
    imgCamara.src = "./assets/assets/camara.svg";
    imgPelicula.src = "./assets/assets/pelicula.svg";
    imgCloseDesktop.src = "./assets/assets/close.svg";
    cruzImgAmplificadaBtn.src = "./assets/assets/close.svg";
}


modo.addEventListener('click', (eventoNocturno) => {
    body.classList.toggle('darkmode');
    store(body.classList.contains('darkmode'));
    cambiarModo();
});

function load(params) {
    const darkmode = localStorage.getItem('darkmode');
    if (!darkmode) {
        store('false');
        modo.innerHTML = `Modo Nocturno`;
    } else if (darkmode == 'true') {
        modo.innerHTML = `Modo Diurno`;
        body.classList.add('darkmode');
    }
}

function store(value) {
    localStorage.setItem('darkmode', value)
}