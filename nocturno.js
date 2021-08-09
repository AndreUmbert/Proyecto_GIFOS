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
    // container.classList.toggle('darkmode');
    // store(container.classList.contains('darkmode'));
    // logo.classList.toggle('darkmode');
    // store(logo.classList.contains('darkmode'));
    // burger.classList.toggle('darkmode');
    // store(burger.classList.contains('darkmode'));
    // navLista.classList.toggle('darkmode');
    // store(navLista.classList.contains('darkmode'));
    // buscarYMas.classList.toggle('darkmode');
    // store(buscarYMas.classList.contains('darkmode'));
    // lupa.classList.toggle('darkmode');
    // store(lupa.classList.contains('darkmode'));
    // textoTitulo.classList.toggle('darkmode');
    // store(textoTitulo.classList.contains('darkmode'));
    // buscadorEtiquetasHome.classList.toggle('darkmode');
    // store(buscadorEtiquetasHome.classList.contains('darkmode'));
    // etiquetasEjemplos.classList.toggle('darkmode');
    // store(etiquetasEjemplos.classList.contains('darkmode'));
    // trendingGifos.classList.toggle('darkmode');
    // store(trendingGifos.classList.contains('darkmode'));
    // tituloTrendingGifos.classList.toggle('darkmode');
    // store(tituloTrendingGifos.classList.contains('darkmode'));
    // infoFooter.classList.toggle('darkmode');
    // store(infoFooter.classList.contains('darkmode'));
    // imgBtnCrearGifos.classList.toggle('darkmode');
    // store(imgBtnCrearGifos.classList.contains('darkmode'));
    // imgBtnCrearGifos.setAttribute('boleano', "true");
    // tituloFavoritos.classList.toggle('darkmode');
    // store(tituloFavoritos.classList.contains('darkmode'));
    // tituloMisGifos.classList.toggle('darkmode');
    // store(tituloMisGifos.classList.contains('darkmode'));
    // modo.classList.toggle('darkmode');
    // store(modo.classList.contains('darkmode'));
    // tituloBusqueda.classList.toggle('darkmode');
    // store(tituloBusqueda.classList.contains('darkmode'));
    // grabacionInterfaz.classList.toggle('darkmode');
    // store(grabacionInterfaz.classList.contains('darkmode'));
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
        // container.classList.add('darkmode');
        // logo.classList.add('darkmode');
        // burger.classList.add('darkmode');
        // navLista.classList.add('darkmode');
        // buscarYMas.classList.add('darkmode');
        // lupa.classList.add('darkmode');
        // textoTitulo.classList.add('darkmode');
        // buscadorEtiquetasHome.classList.add('darkmode');
        // etiquetasEjemplos.classList.add('darkmode');
        // trendingGifos.classList.add('darkmode');
        // tituloTrendingGifos.classList.add('darkmode');
        // infoFooter.classList.add('darkmode');
        // imgBtnCrearGifos.classList.add('darkmode');
        // tituloFavoritos.classList.add('darkmode');
        // tituloMisGifos.classList.add('darkmode');
        // modo.classList.add('darkmode');
        // tituloBusqueda.classList.add('darkmode');
        // grabacionInterfaz.classList.add('darkmode');
    }
}

function store(value) {
    localStorage.setItem('darkmode', value)
}