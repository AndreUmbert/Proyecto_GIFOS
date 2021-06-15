let sectionImgAmplificadaDesktop = document.getElementById("sectionImgAmplificadaDesktop");
let imgCloseDesktop = document.getElementById("imgCloseDesktop");
let contImgDesktop = document.getElementById("contImgDesktop");
let imgFlechaIzqDesktop = document.getElementById("imgFlechaIzqDesktop");
let imgAmpliadaDesktop = document.getElementById("imgAmpliadaDesktop");
let imgFlechaDerDesktop = document.getElementById("imgFlechaDerDesktop");
let infoImgAmplaiadaDesktop = document.getElementById("infoImgAmplaiadaDesktop");
let usuarioImgDesktop = document.getElementById("usuarioImgDesktop");
let tituloImgDesktop = document.getElementById("tituloImgDesktop");
let btnsImgAmpladaDesktop = document.getElementById("btnsImgAmpladaDesktop");
let corazonAmpliadoDesktop = document.getElementById("corazonAmpliadoDesktop");
let descargaAmplaidaDesktop = document.getElementById("descargaAmplaidaDesktop");
let header = document.getElementById("header");



async function ampliarDesktop(eventoAmpliarDesktop) {
    creadorGifos.style.display = "none";
    menu.src = "./assets/assets/burger.svg";
    sectionMisGifos.style.display = "none";
    sectionFavoritos.style.display = "none";
    if (pantallaDesktop.matches) {
        site_nav.style.display = "none";
    }
    busquedaSection.style.display = "none";
    tituloInicio.style.display = "none";
    pjsGifos.style.display = "none";
    searchBar.style.display = "none";
    etiquetasInicio.style.display = "none";
    trendingGifos.style.display = "none";
    sectionImgAmplificadaDesktop.style.display = "block";
    footer.style.display = "none";
    header.style.display = "none";
    imgAmplificada.src = `${eventoAmpliarDesktop.target.src}`;
    imgAmplificada.setAttribute("corazon", `${eventoAmpliarDesktop.target.getAttribute("corazon")}`);
    imgAmplificada.key = `${eventoAmpliarDesktop.target.getAttribute("key")}`;
    imgAmplificada.setAttribute("key", `${eventoAmpliarDesktop.target.getAttribute("key")}`);
    nombreUsuario.innerHTML = `${eventoAmpliarDesktop.target.getAttribute("nombre")}`;
    tituloGif.innerHTML = `${eventoAmpliarDesktop.target.getAttribute("titulo")}`;
}

//cerrar imagen ampliada desktop

imgCloseDesktop.addEventListener("click", (eventoCerrarImgDesktop) => {
    creadorGifos.style.display = "none";
    menu.src = "./assets/assets/burger.svg";
    sectionMisGifos.style.display = "none";
    sectionFavoritos.style.display = "none";
    if (pantallaDesktop.matches) {
        site_nav.style.display = "block";
    }
    busquedaSection.style.display = "none";
    tituloInicio.style.display = "block";
    pjsGifos.style.display = "block";
    searchBar.style.display = "flex";
    etiquetasInicio.style.display = "block";
    trendingGifos.style.display = "block";
    sectionImgAmplificadaDesktop.style.display = "none";
    footer.style.display = "block";
    header.style.display = "block";
});