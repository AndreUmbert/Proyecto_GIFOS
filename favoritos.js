let noFavs = document.getElementById("noFavs");
let searchBar = document.getElementById("searchBar");
let btnFavoritos = document.getElementById("itemListaFavoritos");
let etiquetasInicio = document.getElementById("etiquetasInicio");
let galeriaFav = document.getElementById("galeriaFav");
let itemListaFavoritos = document.getElementById("itemListaFavoritos");
const gifFav = `${imgAmplificada.getAttribute("key")}`;
let textoNoFav = document.getElementById("textoNoFavs");
let imgNoFavs = document.getElementById("imgNoFavs");

btnFavoritos.addEventListener('click', async (desplegarFavoritos) => {
    creadorGifos.style.display = "none";
    if (localStorage.getItem("darkmode") === "true") {
        menu.src = "./assets/assets/burger-modo-noct.svg";
    } else {
        menu.src = "./assets/assets/burger.svg";
    }
    sectionMisGifos.style.display = "none";
    sectionFavoritos.style.display = "block";
    if (!pantallaDesktop.matches) {
        site_nav.style.display = "none";
    }
    busquedaSection.style.display = "none";
    tituloInicio.style.display = "none";
    pjsGifos.style.display = "none";
    searchBar.style.display = "none";
    etiquetasInicio.style.display = "none";
    if (sectionFavoritos.style.display == "block") {
        galeriaFav.innerHTML = ``;
    }
    actualizarFavoritos();
});



if (buscador.value === "") {
    sectionFavoritos.style.display = "none";
}

// itemListaFavoritos.addEventListener("click", () => {
//     actualizarFavoritos();

// });
function actualizarFavoritos() {

    if (!arrayFavoritos) {
        console.log("no hay favoritos");
        //Aca hay que mostrar el mensaje
        if (pantallaDesktop.matches) {
            btnVerMasFav.style.display = "none";
            galeriaFav.style.display = "none";
            noFavs.style.display = "block";
            noFavs.style.textAlign = "center";
            textoNoFav.style.fontFamily = "Montserrat, sans-serif";
            textoNoFav.style.fontWeight = "bold";
            textoNoFav.style.color = "#50E3C2";
            textoNoFav.style.marginTop = "1.6458333vw";
            textoNoFav.style.fontSize = "1.25vw";
            textoNoFav.style.lineHeight = "2.3vw"
            textoNoFav.style.marginBottom = "9.5138888vw";
            imgNoFavs.style.marginTop = "7.590277vw";
        } else {
            noFavs.style.display = "none";
        }
    } else {
        noFavs.style.display = "none";
        arrayFavoritos.forEach(gifFav => {
            showFavoritos(gifFav);
        });
    }
}



async function showFavoritos(gifFav) {

    const URL_SearchId = `https://api.giphy.com/v1/gifs/${gifFav}?api_key=umCoI8QE3nt72GLxXUntliERdZW5J6z9`;
    const favorito = await fetch(URL_SearchId);
    let trending = await favorito.json();
    let isFav = arrayFavoritos.includes(trending.data.id);
    console.log(arrayFavoritos);
    galeriaFav.innerHTML += ` 
    <div class="divHoverContenedor">
    <img key="${trending.data.id}"  class="imgBuscada" src="${trending.data.images.fixed_height.url}" nombre="${trending.data.username}" corazon="true" titulo="${trending.data.title}" onmouseover="pintar(this)" onclick="ampliar()">
    <div key="${trending.data.id}" id="${trending.data.id}" nombre="${trending.data.username}" titulo="${trending.data.title}" class="divHover" onmouseout="despintar(this)">
    <div id="btnsPintadosDesktop" key="${trending.data.id}">
    <img class="btnFavPintado" src=${!isFav ? "assets/assets/icon-fav.svg" : "assets/assets/icon-fav-active.svg"} onclick="favDesktop(this)" key="${trending.data.id}">
    <img id="btnDescargarPintado" src="assets/assets/icon-download.svg" onclick="downloadDesktop(this)" key="${trending.data.id}">
    <img id="btnAmpliarPintado"  titulo="${trending.data.title}" nombre="${trending.data.username}" path="${trending.data.images.fixed_height.url}" onclick="ampliarDesktop(this)" src="assets/assets/icon-max-normal.svg" key="${trending.data.id}">
    </div>
    <div id="infoImgPintDesktop">
    <p id="usuarioPintado">${trending.data.username}</p>
    <p id="tituloPintado">${trending.data.title}</p>
    </div>
    </div>
    </div>
    `;
    let arrayImagenesFavoritos = document.querySelectorAll(".imgBuscada");
    let noFavs = document.getElementById("noFavs");
    let hijosFavs = document.getElementById("galeriaFav").children;
    let btnFavPintado = document.getElementsByClassName("btnFavPintado");
    var arrFavoritos = Array.prototype.slice.call(btnFavPintado);
    arrFavoritos.forEach(btnFavPintado => {
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

function eliminarElementoArray(idElementoFavorito) {

    console.log(arrayFavoritos);
    const index = arrayFavoritos.indexOf(idElementoFavorito);
    console.log(index);
}
