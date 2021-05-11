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




function loadFavoritosLs() {
    let favoritosGifs = JSON.parse(localStorage.getItem("misFavoritos"));
    if (favoritosGifs) {
        arrayFavoritos = favoritosGifs;
    }
};

loadFavoritosLs();



buscador.addEventListener('click', (ocultar) => {
    favoritos.style.display = "none";
    pjsGifos.style.display = "none";
    tituloInicio.style.display = "none";
});
//al apretar ENTER:
buscador.addEventListener('keypress', async (buscar) => {
    if (buscar.key === 'Enter') {

        tituloGif.innerHTML = ``;
        nombreUsuario.innerHTML = ``;
        site_nav.style.display = "none";
        busquedaSection.style.display = "Block";
        lupa.src = "./assets/assets/close.svg";
        galeria.innerHTML = ``;
        let resultadoBusqueda = await fetch(URL_BASE + buscar.target.value);
        let json = await resultadoBusqueda.json();
        json.data.forEach(trending => {
            // console.log(trending.username);
            galeria.innerHTML += `
            <div class="divHoverContenedor">
            <img key="${trending.id}"  class="imgBuscada" src="${trending.images.fixed_height.url}" nombre="${trending.username}" corazon="false" titulo="${trending.title}">
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
            tituloBusqueda.innerHTML = `${buscar.target.value}`;
            tituloBusqueda.style.textTransform = "capitalize";

        });
        let arrayImagenes = document.querySelectorAll(".imgBuscada");
        arrayImagenes.forEach(imagenesGaleria => {
            if (pantallaDesktop.matches) {
                site_nav.style.display = "block";
                console.log("pantallaDesktop");
                imagenesGaleria.addEventListener('mouseover', (eventoPintar) => {

                    let divHover = document.getElementById(eventoPintar.target.getAttribute("key"));

                    divHover.style.display = "block";

                    divHover.addEventListener('mouseout', () => {
                        divHover.style.display = "none";
                    });
                });
            }
        });
        arrayImagenes.forEach(imagenesGaleria => {
            imagenesGaleria.addEventListener('click', (eventoAmpliar) => {
                console.log(eventoAmpliar.target.getAttribute("key"));
                sectionImagenAmplificada.style.display = "block";
                imgAmplificada.src = `${eventoAmpliar.target.src}`;
                imgAmplificada.setAttribute("corazon", `${eventoAmpliar.target.getAttribute("corazon")}`);
                imgAmplificada.key = `${eventoAmpliar.target.getAttribute("key")}`;
                imgAmplificada.setAttribute("key", `${eventoAmpliar.target.getAttribute("key")}`)
                nombreUsuario.innerHTML = `${eventoAmpliar.target.getAttribute("nombre")}`;
                tituloGif.innerHTML = `${eventoAmpliar.target.getAttribute("titulo")}`;
                busquedaSection.style.display = "none";
                buscadorGifos.style.display = "none";
                trendingSection.style.display = "none";
                footer.style.display = "none";
                let cruzImgAmplificadaBtn = document.getElementById('cruzImgAmplificadaBtn');
                cruzImgAmplificadaBtn.addEventListener('click', (eventoReducir) => {
                    busquedaSection.style.display = "block";
                    sectionImagenAmplificada.style.display = "none";
                    buscadorGifos.style.display = "block";
                    trendingSection.style.display = "block";
                    footer.style.display = "block";
                    btnFavImgAmpliada.src = "http://127.0.0.1:5500/Proyecto_GIFOS/assets/assets/icon-fav-hover.svg";
                });
                btnFavImgAmpliada.setAttribute("key", `${eventoAmpliar.target.getAttribute("key")}`)
                // let btnFavImgAmpliada = document.getElementById("btnFavImgAmpliada");
                btnFavImgAmpliada.addEventListener('click', (eventoFavorito) => {

                    if (eventoAmpliar.target.getAttribute("corazon") == "false") {
                        btnFavImgAmpliada.src = "http://127.0.0.1:5500/Proyecto_GIFOS/assets/assets/icon-fav-active.svg";
                        eventoAmpliar.target.setAttribute("corazon", "true")
                        imgAmplificada.setAttribute("corazon", "true")
                        let idImgFavActive = `${imgAmplificada.getAttribute("key")}`;
                        arrayFavoritos.push(idImgFavActive);
                        localStorage.setItem("misFavoritos", JSON.stringify(arrayFavoritos));
                        agregarAFavoritos(eventoAmpliar, imgAmplificada);

                    } else {
                        btnFavImgAmpliada.src = "http://127.0.0.1:5500/Proyecto_GIFOS/assets/assets/icon-fav-hover.svg";
                        eventoAmpliar.target.setAttribute("corazon", "false");
                        imgAmplificada.setAttribute("corazon", "false");

                        eliminarDeFavoritos(eventoAmpliar);

                    }

                });
                let btnDescargarImgAmpliada = document.getElementById("btnDescargarImgAmpliada");
                // console.log(btnDescargarImgAmpliada);
                btnDescargarImgAmpliada.addEventListener('click', (eventoDescargar) => {
                    console.log("click");
                    console.log(eventoDescargar);
                    download();
                })
            });
        });
        let hijosGaleria = document.getElementById("galeria").children;
        if (hijosGaleria.length % 12 != 0) {
            btnVerMas.style.display = "none";
        }
    }
});


//al CLICKEAR sobre la lupa:

lupa.addEventListener('click', async (buscarEnLupa) => {
    contadorOffset += 12;
    busquedaSection.style.display = "Block"
    let URL_BusquedaReiterada = "https://api.giphy.com/v1/gifs/search?api_key=umCoI8QE3nt72GLxXUntliERdZW5J6z9&limit=12&offset=" + contadorOffset + "&q=";
    let resultadoBusqueda = await fetch(URL_BusquedaReiterada + buscador.value);
    let json = await resultadoBusqueda.json();
    json.data.forEach(trending => {
        galeria.innerHTML += `
        <div class="divHoverContenedor">
        <img key="${trending.id}"  class="imgBuscada" src="${trending.images.fixed_height.url}" nombre="${trending.username}" titulo="${trending.title}">
        <div id="${trending.id}" class="divHover"></div>
        </div>
        `;
        tituloBusqueda.innerHTML = `${buscador.value}`;
        tituloBusqueda.style.textTransform = "capitalize";
    });
    let arrayImagenes = document.querySelectorAll(".imgBuscada");
    arrayImagenes.forEach(imagenesGaleria => {
        if (pantallaDesktop.matches) {
            console.log("pantallaDesktop");
            imagenesGaleria.addEventListener('mouseover', (eventoPintar) => {
                console.log(eventoPintar.target.getAttribute("key"));
                let divHover = document.getElementById(eventoPintar.target.getAttribute("key"));

                divHover.style.display = "block";

                divHover.addEventListener('mouseout', () => {
                    divHover.style.display = "none";
                });
            });
        }
    });
    arrayImagenes.forEach(imagenesGaleria => {
        imagenesGaleria.addEventListener('click', (eventoAmpliar) => {
            console.log(eventoAmpliar.target.getAttribute("nombre"));
            sectionImagenAmplificada.style.display = "block";
            imgAmplificada.src = `${eventoAmpliar.target.src}`;
            imgAmplificada.key = `${eventoAmpliar.target.key}`;
            nombreUsuario.innerHTML = `${eventoAmpliar.target.getAttribute("nombre")}`;
            tituloGif.innerHTML = `${eventoAmpliar.target.getAttribute("titulo")}`;
            busquedaSection.style.display = "none";
            buscadorGifos.style.display = "none";
            trendingSection.style.display = "none";
            footer.style.display = "none";
            let cruzImgAmplificadaBtn = document.getElementById('cruzImgAmplificadaBtn');
            cruzImgAmplificadaBtn.addEventListener('click', (eventoReducir) => {
                busquedaSection.style.display = "block";
                sectionImagenAmplificada.style.display = "none";
                buscadorGifos.style.display = "block";
                trendingSection.style.display = "block";
                footer.style.display = "block";
            });
        });
    });
    let hijosGaleria = document.getElementById("galeria").children;
    if (hijosGaleria.length % 12 != 0) {
        btnVerMas.style.display = "none";
    }
});




//al CLICKEAR sobre VER MAS:
let btnVerMas = document.getElementById("btnVerMas");
btnVerMas.addEventListener('click', async (verMas) => {
    contadorOffset += 12;
    let URL_BusquedaReiterada = "https://api.giphy.com/v1/gifs/search?api_key=umCoI8QE3nt72GLxXUntliERdZW5J6z9&limit=12&offset=" + contadorOffset + "&q=";
    busquedaSection.style.display = "Block";
    let resultadoBusqueda = await fetch(URL_BusquedaReiterada + buscador.value);
    let json = await resultadoBusqueda.json();
    json.data.forEach(trending => {
        galeria.innerHTML += `
        <div class="divHoverContenedor">
        <img key="${trending.id}"  class="imgBuscada" src="${trending.images.fixed_height.url}" nombre="${trending.username}" titulo="${trending.title}">
        <div id="${trending.id}" class="divHover"></div>
        </div>
        `;
    });
    let arrayImagenes = document.querySelectorAll(".imgBuscada");
    arrayImagenes.forEach(imagenesGaleria => {
        if (pantallaDesktop.matches) {
            console.log("pantallaDesktop");
            imagenesGaleria.addEventListener('mouseover', (eventoPintar) => {
                console.log(eventoPintar.target.getAttribute("key"));
                let divHover = document.getElementById(eventoPintar.target.getAttribute("key"));

                divHover.style.display = "block";

                divHover.addEventListener('mouseout', () => {
                    divHover.style.display = "none";
                });
            });
        }
    });
    arrayImagenes.forEach(imagenesGaleria => {
        imagenesGaleria.addEventListener('click', (eventoAmpliar) => {
            console.log(eventoAmpliar.target.getAttribute("nombre"));
            sectionImagenAmplificada.style.display = "block";
            imgAmplificada.src = `${eventoAmpliar.target.src}`;
            imgAmplificada.key = `${eventoAmpliar.target.key}`;
            nombreUsuario.innerHTML = `${eventoAmpliar.target.getAttribute("nombre")}`;
            tituloGif.innerHTML = `${eventoAmpliar.target.getAttribute("titulo")}`;
            busquedaSection.style.display = "none";
            buscadorGifos.style.display = "none";
            trendingSection.style.display = "none";
            footer.style.display = "none";
            let cruzImgAmplificadaBtn = document.getElementById('cruzImgAmplificadaBtn');
            cruzImgAmplificadaBtn.addEventListener('click', (eventoReducir) => {
                busquedaSection.style.display = "block";
                sectionImagenAmplificada.style.display = "none";
                buscadorGifos.style.display = "block";
                trendingSection.style.display = "block";
                footer.style.display = "block";
            });
        });
    });
    let hijosGaleria = document.getElementById("galeria").children;
    if (hijosGaleria.length % 12 != 0) {
        btnVerMas.style.display = "none";
    }
});




// console.log(buscarYMas.value);

if (buscador.value === "") {
    busquedaSection.style.display = "none";
}

//Trending Endpoints:

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
        console.log(trendingEndpoints.querySelector('[id=etiquetasEjemplosTexto]').value);
    } catch (error) {
        console.log(error);
    }
}
mostrarEndpoints();

//autocompletar busqueda
buscador.addEventListener('keyup', async (autocompletar) => {
    if (autocompletar.key) {
        contadorOffset = 0;
        sugerenciasBusqueda.innerHTML = " ";
        buscador.style.margin = "0";
        buscador.style.width = "80%";
        barra.style.margin = "1.0416666vw 0 0.694444444vw 0";
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
        cruzAparece.innerHTML = `
        <img src="./assets/assets/close.svg">
        `;
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

//sirve para apretar a un item de una lista y que este ocupe el lugar del input:
async function changeText(objeto) {
    buscador.value = objeto.innerHTML;
    if (buscador.value.charAt(buscador.value.length - 1) == ',') {
        buscador.value = buscador.value.slice(0, -1)
    }
    site_nav.style.display = "none";
    busquedaSection.style.display = "Block";
    galeria.innerHTML = ``;
    let resultadoBusqueda = await fetch(URL_BASE + buscador.value);
    let json = await resultadoBusqueda.json();
    json.data.forEach(trending => {
        galeria.innerHTML += `
        <div class="divHoverContenedor">
        <img key="${trending.id}"  class="imgBuscada" src="${trending.images.fixed_height.url}" nombre="${trending.username}" titulo="${trending.title}">
        <div id="${trending.id}" class="divHover">
        </div>
        </div>
        `;
        tituloBusqueda.innerHTML = `${buscador.value}`;
        tituloBusqueda.style.textTransform = "capitalize";
    });
    let arrayImagenes = document.querySelectorAll(".imgBuscada");
    arrayImagenes.forEach(imagenesGaleria => {
        if (pantallaDesktop.matches) {
            console.log("pantallaDesktop");
            imagenesGaleria.addEventListener('mouseover', (eventoPintar) => {
                console.log(eventoPintar.target.getAttribute("key"));
                let divHover = document.getElementById(eventoPintar.target.getAttribute("key"));

                divHover.style.display = "block";

                divHover.addEventListener('mouseout', () => {
                    divHover.style.display = "none";
                });
            });
        }
    });
    arrayImagenes.forEach(imagenesGaleria => {
        imagenesGaleria.addEventListener('click', (eventoAmpliar) => {
            console.log(eventoAmpliar.target.getAttribute("nombre"));
            sectionImagenAmplificada.style.display = "block";
            imgAmplificada.src = `${eventoAmpliar.target.src}`;
            imgAmplificada.key = `${eventoAmpliar.target.key}`;
            nombreUsuario.innerHTML = `${eventoAmpliar.target.getAttribute("nombre")}`;
            tituloGif.innerHTML = `${eventoAmpliar.target.getAttribute("titulo")}`;
            busquedaSection.style.display = "none";
            buscadorGifos.style.display = "none";
            trendingSection.style.display = "none";
            footer.style.display = "none";
            let cruzImgAmplificadaBtn = document.getElementById('cruzImgAmplificadaBtn');
            cruzImgAmplificadaBtn.addEventListener('click', (eventoReducir) => {
                busquedaSection.style.display = "block";
                sectionImagenAmplificada.style.display = "none";
                buscadorGifos.style.display = "block";
                trendingSection.style.display = "block";
                footer.style.display = "block";
            });
        });
    });
}

async function download() {
    const a = document.createElement("a");
    a.href = await descargarGif();
    a.download = "gif.gif";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
}

async function descargarGif() {

    var source = "https://api.giphy.com/v1/gifs/" + `${imgAmplificada.key}` + "?api_key=umCoI8QE3nt72GLxXUntliERdZW5J6z9";
    let response = await fetch(source);
    let info = await response.json();

    console.log(info.data.images.downsized_large.url);

    return fetch(info.data.images.downsized_large.url).then((response) => {
        return response.blob();
    }).then(blob => {
        return URL.createObjectURL(blob);
    });
}

async function agregarAFavoritos(eventoAmpliar) {
    if (arrayFavoritos.includes(eventoAmpliar.target.getAttribute("key"))) {
        btnFavImgAmpliada.src = "http://127.0.0.1:5500/Proyecto_GIFOS/assets/assets/icon-fav-active.svg";
        console.log(arrayFavoritos);
    }
}

async function eliminarDeFavoritos(eventoAmpliar) {
    arrayFavoritos.splice(arrayFavoritos.indexOf(eventoAmpliar.target.getAttribute("key")), 1);
    localStorage.clear();
    localStorage.setItem("misFavoritos", JSON.stringify(arrayFavoritos));


    // btnFavImgAmpliada.src = "http://127.0.0.1:5500/Proyecto_GIFOS/assets/assets/icon-fav-hover.svg";

}