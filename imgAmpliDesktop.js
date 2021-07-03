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
let header = document.getElementById("header");





async function ampliarDesktop(eventoAmpliarDesktop) {
    let imgAmpliadaDesktop = document.getElementById("imgAmpliadaDesktop");
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
    imgAmpliadaDesktop.setAttribute("src", `${eventoAmpliarDesktop.getAttribute("path")}`);
    imgAmpliadaDesktop.setAttribute("key", `${eventoAmpliarDesktop.getAttribute("key")}`);
    imgAmpliadaDesktop.key = `${eventoAmpliarDesktop.getAttribute("key")}`;
    usuarioImgDesktop.innerHTML = `${eventoAmpliarDesktop.getAttribute("nombre")}`;
    tituloImgDesktop.innerHTML = `${eventoAmpliarDesktop.getAttribute("titulo")}`;
    let descargaAmpliadaDesktop = document.getElementById("descargaAmpliadaDesktop");
    descargaAmpliadaDesktop.setAttribute("key", `${eventoAmpliarDesktop.getAttribute("key")}`);
    let corazonAmpliadoDesktop = document.getElementById("corazonAmpliadoDesktop");
    corazonAmpliadoDesktop.setAttribute("key", `${eventoAmpliarDesktop.getAttribute("key")}`);
}

//cerrar imagen ampliada desktop

imgCloseDesktop.addEventListener("click", (eventoCerrarImgDesktop) => {
    location.reload();
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