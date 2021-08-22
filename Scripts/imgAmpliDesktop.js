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

//----------------------------------------------------------------------------------------------------------------------------------------------------------------------
//                                                  FUNCION PARA MOSTRAR LAS IMAGENES AMPLIADAS DESDE EL BOTON AMPLIAR EN VERSION DESKTOP
//----------------------------------------------------------------------------------------------------------------------------------------------------------------------

function ampliarDesktop(eventoAmpliarDesktop) {

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
    let contador = eventoAmpliarDesktop.getAttribute("contador");
    if (contador == 0) {
        imgFlechaIzqDesktop.style.display = "none";
    } if (contador >= arrayCarrusel.length - 1) {
        imgFlechaDerDesktop.style.display = "none";
    }
    console.log(arrayCarrusel[parseInt(contador)]);
    console.log(document.getElementById(arrayCarrusel[parseInt(contador)]).previousElementSibling);
    imgAmpliadaDesktop.setAttribute("src", `${document.getElementById(arrayCarrusel[parseInt(contador)]).previousElementSibling.getAttribute("src")}`);
    imgAmpliadaDesktop.setAttribute("key", `${arrayCarrusel[parseInt(contador)]}`);
    imgAmpliadaDesktop.key = `${eventoAmpliarDesktop.getAttribute("key")}`;
    usuarioImgDesktop.innerHTML = `${eventoAmpliarDesktop.getAttribute("nombre")}`;
    tituloImgDesktop.innerHTML = `${eventoAmpliarDesktop.getAttribute("titulo")}`;
    let descargaAmpliadaDesktop = document.getElementById("descargaAmpliadaDesktop");
    descargaAmpliadaDesktop.setAttribute("key", `${eventoAmpliarDesktop.getAttribute("key")}`);
    let corazonAmpliadoDesktop = document.getElementById("corazonAmpliadoDesktop");
    corazonAmpliadoDesktop.setAttribute("key", `${eventoAmpliarDesktop.getAttribute("key")}`);
    if (arrayFavoritos.includes(eventoAmpliarDesktop.getAttribute("key"))) {
        corazonAmpliadoDesktop.src = "assets/assets/icon-fav-active.svg";
        corazonAmpliadoDesktop.style.border = "1px solid #ced7e1";
        corazonAmpliadoDesktop.style.borderRadius = "0.3rem";
        corazonAmpliadoDesktop.style.opacity = "1";
        corazonAmpliadoDesktop.style.width = "1.25vw";
        corazonAmpliadoDesktop.style.height = "1.104166666vw";
        corazonAmpliadoDesktop.style.padding = "0.625vw 0.55555555vw";
        corazonAmpliadoDesktop.style.backgroundColor = "#ffffff";
    } else {
        corazonAmpliadoDesktop.src = "assets/assets/icon-fav.svg";
        corazonAmpliadoDesktop.style.opacity = "1";
        corazonAmpliadoDesktop.style.width = "2.361111111vw";
        corazonAmpliadoDesktop.style.height = "2.361111111vw";
        corazonAmpliadoDesktop.style.padding = "0";
        corazonAmpliadoDesktop.style.backgroundColor = "#ffffff";
    }
    imgFlechaIzqDesktop.addEventListener("click", () => {
        contador--;
        if (contador > 0) {
            imgAmpliadaDesktop.setAttribute("src", `${document.getElementById(arrayCarrusel[parseInt(contador)]).previousElementSibling.getAttribute("src")}`);
            imgAmpliadaDesktop.setAttribute("key", `${arrayCarrusel[parseInt(contador)]}`);
            imgFlechaDerDesktop.style.display = "block";
        } else if (contador == 0) {
            imgFlechaIzqDesktop.style.display = "none";
        }
        console.log(contador);

    });

    imgFlechaDerDesktop.addEventListener("click", () => {
        contador++;
        if (contador < arrayCarrusel.length - 1) {
            imgAmpliadaDesktop.setAttribute("src", `${document.getElementById(arrayCarrusel[parseInt(contador)]).previousElementSibling.getAttribute("src")}`);
            imgAmpliadaDesktop.setAttribute("key", `${arrayCarrusel[parseInt(contador)]}`);
            imgFlechaIzqDesktop.style.display = "block";
        } else {
            imgFlechaDerDesktop.style.display = "none";
        }
        console.log(contador);
    });
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