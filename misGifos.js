let btnMisGifos = document.getElementById("itemListaMisGifos");
let sectionMisGifos = document.getElementById("sectionMisGifos");
let icon_MisGifos = document.getElementById("icon_MisGifos");
let tituloMisGifos = document.getElementById("tituloMisGifos");
let galeriaMisGifos = document.getElementById("galeriaMisGifos");
let btnVerMasMisGifos = document.getElementById("btnVerMasMisGifos");
let noGifos = document.getElementById("noGifos");

btnMisGifos.addEventListener("click", (mostrarMisGifos) => {
    creadorGifos.style.display = "none";
    menu.src = "./assets/assets/burger.svg";
    sectionMisGifos.style.display = "block";
    sectionFavoritos.style.display = "none";
    if (!pantallaDesktop.matches) {
        site_nav.style.display = "none";
    }
    busquedaSection.style.display = "none";
    tituloInicio.style.display = "none";
    pjsGifos.style.display = "none";
    searchBar.style.display = "none";
    etiquetasInicio.style.display = "none";
    if (sectionMisGifos.style.display == "block") {
        galeriaMisGifos.innerHTML = ``;
    }
});

if (buscador.value === "") {
    sectionMisGifos.style.display = "none";
}


btnMisGifos.addEventListener("click", () => {
    actualizarGifos();

});

function actualizarGifos() {
    if (arrayGifosCreados.length === 0) {
        console.log("no hay Gifos");
        //Aca hay que mostrar el mensaje
        if (pantallaDesktop.matches) {
            btnVerMasMisGifos.style.display = "none";
            galeriaMisGifos.style.display = "none";
            noGifos.style.display = "block";
            noGifos.style.textAlign = "center";
            let textoNoGifos = document.getElementById("textoNoGifos");
            let imgNoGifos = document.getElementById("imgNoGifos");
            textoNoGifos.style.fontFamily = "Montserrat, sans-serif";
            textoNoGifos.style.fontWeight = "bold";
            textoNoGifos.style.color = "#50E3C2";
            textoNoGifos.style.marginTop = "2.77777777vw";
            textoNoGifos.style.fontSize = "1.25vw";
            textoNoGifos.style.lineHeight = "2.3vw"
            textoNoGifos.style.marginBottom = "9.5138888vw";
            imgNoGifos.style.marginTop = "3.61111111vw";
        } else {
            noGifos.style.display = "none";
        }
    } else {
        noGifos.style.display = "none";
        arrayGifosCreados.forEach(gifUsuario => {
            showGifos(gifUsuario);
        });
    }
}


async function showGifos(gifUsuario) {

    const URL_SearchGifoId = `https://api.giphy.com/v1/gifs/${gifUsuario}?api_key=umCoI8QE3nt72GLxXUntliERdZW5J6z9`;
    const gifardo = await fetch(URL_SearchGifoId);
    let trendingGifo = await gifardo.json();
    console.log(trendingGifo);
    galeriaMisGifos.innerHTML += ` 
    <div class="divHoverContenedorMisGifos">
    <img key="${trendingGifo.data.id}"  class="imgBuscada" src="${trendingGifo.data.images.fixed_height.url}" nombre="${trendingGifo.data.username}" corazon="false" titulo="${trendingGifo.data.title}" onmouseover="pintar(this)" onclick="ampliar()">
    <div id="${trendingGifo.data.id}" nombre="${trendingGifo.data.username}" titulo="${trendingGifo.data.title}" class="divHover" onmouseout="despintar(this)">
    <div id="btnsPintadosDesktop">
    <img id="btnTrashPintado" src="assets/assets/icon-trash-normal.svg" onclick="trashDesktop(this)" key="${trendingGifo.data.id}">
    <img id="btnDescargarPintado" onclick="downloadDesktop(this)" src="assets/assets/icon-download.svg" key="${trendingGifo.data.id}">
    <img id="btnAmpliarPintado" src="assets/assets/icon-max-normal.svg" key="${trendingGifo.data.id}">
    </div>
    <div id="infoImgPintDesktop">
    <p id="usuarioPintado">${trendingGifo.data.username}</p>
    <p id="tituloPintado">${trendingGifo.data.title}</p>
    </div>
    </div>
    </div>`;
    let arrayGifosCreados = document.querySelectorAll(".imgBuscada");
    arrayGifosCreados.forEach(imagenesMisGifos => {
        imagenesMisGifos.addEventListener('click', (eventoAmpliar) => {
            console.log(trendingGifo);
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
            footer.style.display = "none";
            let btnTrashPintado = document.getElementById("btnTrashPintado");
            let cruzImgAmplificadaBtn = document.getElementById('cruzImgAmplificadaBtn');
            cruzImgAmplificadaBtn.addEventListener('click', (eventoReducir) => {
                busquedaSection.style.display = "none";
                sectionImagenAmplificada.style.display = "none";
                buscadorGifos.style.display = "none";
                trendingSection.style.display = "block";
                footer.style.display = "block";
                galeriaFav.style.display = "grid";
            });
            btnTrashPintado.addEventListener('click', (eventoFavorito) => {
                eliminarElementoArray(eventoAmpliar.target.getAttribute("key"));
            });
            let btnDescargarImgAmpliada = document.getElementById("btnDescargarImgAmpliada");
            btnDescargarImgAmpliada.addEventListener('click', (eventoDescargar) => {
                console.log("click");
                console.log(eventoDescargar);
                download();
            })
        });
    });
    let noFavs = document.getElementById("noFavs");
    let hijosFavs = document.getElementById("galeriaFav").children;
    console.log(hijosFavs);
    console.log(hijosFavs.length);

}
