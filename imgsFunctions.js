
function pintar(eventoPintar) {
    if (pantallaDesktop.matches) {
        // console.log(eventoPintar);
        const arrayDivHovers = document.querySelectorAll(".divHover");
        const divHover = document.getElementById(eventoPintar.getAttribute("key"));
        divHover.setAttribute("key", `${eventoPintar.getAttribute("key")}`);
        divHover.key = `${eventoPintar.getAttribute("key")}`;
        divHover.style.display = "block";
        let btnFavPintado = document.getElementById("btnFavPintado");
        // arrayDivHovers.forEach(divsGaleria => {
        //     if (arrayFavoritos.includes(eventoPintar.getAttribute("key"))) {
        //         btnFavPintado.src = "assets/assets/icon-fav-active.svg";
        //     }
        //     // } else {
        //     //     btnFavPintado.src = "assets/assets/icon-fav.svg";
        //     // }
        // });
    }
}

function despintar(eventoDespintar) {
    if (pantallaDesktop.matches) {
        const arrayDivHovers = document.querySelectorAll(".divHover");
        const divHover = document.getElementById(eventoDespintar.getAttribute("key"));
        divHover.style.display = "none";
    }
}


function ampliar() {
    if (!pantallaDesktop.matches) {
        const arrayImagenes = document.querySelectorAll(".imgBuscada");
        arrayImagenes.forEach(imagenesGaleria => {
            imagenesGaleria.addEventListener('click', (eventoAmpliar) => {
                console.log(eventoAmpliar.target);
                console.log(eventoAmpliar.target.getAttribute("key"));
                sectionImagenAmplificada.style.display = "block";
                imgAmplificada.src = `${eventoAmpliar.target.src}`;
                imgAmplificada.setAttribute("corazon", `${eventoAmpliar.target.getAttribute("corazon")}`);
                imgAmplificada.key = `${eventoAmpliar.target.getAttribute("key")}`;
                imgAmplificada.setAttribute("key", `${eventoAmpliar.target.getAttribute("key")}`);
                nombreUsuario.innerHTML = `${eventoAmpliar.target.getAttribute("nombre")}`;
                tituloGif.innerHTML = `${eventoAmpliar.target.getAttribute("titulo")}`;
                busquedaSection.style.display = "none";
                buscadorGifos.style.display = "none";
                trendingSection.style.display = "none";
                footer.style.display = "none";
                galeriaFav.style.display = "none";
                let cruzImgAmplificadaBtn = document.getElementById('cruzImgAmplificadaBtn');
                cruzImgAmplificadaBtn.addEventListener('click', (eventoReducir) => {
                    location.reload()
                });
                if (arrayFavoritos.includes(eventoAmpliar.target.getAttribute("key"))) {
                    btnFavImgAmpliada.src = "assets/assets/icon-fav-active.svg";
                    btnFavImgAmpliada.style.padding = "2.4vw 2.13333333vw";
                    btnFavImgAmpliada.style.borderRadius = "5px";
                    btnFavImgAmpliada.style.backgroundColor = "#ffffff";
                } else {
                    btnFavImgAmpliada.src = "assets/assets/icon-fav.svg";
                    btnFavImgAmpliada.style.width = "9.6vw";
                    btnFavImgAmpliada.style.height = "9.6vw";
                    btnFavImgAmpliada.style.backgroundColor = "#ffffff";
                    btnFavImgAmpliada.style.borderRadius = "5px";
                }
                btnFavImgAmpliada.setAttribute("key", `${eventoAmpliar.target.getAttribute("key")}`);

                let btnDescargarImgAmpliada = document.getElementById("btnDescargarImgAmpliada");
                btnDescargarImgAmpliada.addEventListener('click', (eventoDescargar) => {
                    console.log("click");
                    console.log(eventoDescargar);
                    download();
                });
            });
        });
    }
}

function favDesktop(eventoFavDesktop) {
    if (pantallaDesktop.matches) {
        if (arrayFavoritos.includes(eventoFavDesktop.getAttribute("key"))) {
            arrayFavoritos.splice(arrayFavoritos.indexOf(eventoFavDesktop.getAttribute("key")), 1);
            localStorage.setItem("misFavoritos", JSON.stringify(arrayFavoritos));
            eventoFavDesktop.src = "assets/assets/icon-fav.svg";
            corazonAmpliadoDesktop.style.opacity = "1";
            corazonAmpliadoDesktop.style.width = "2.361111111vw";
            corazonAmpliadoDesktop.style.height = "2.361111111vw";
            corazonAmpliadoDesktop.style.padding = "0";
        } else {
            eventoFavDesktop.src = "assets/assets/icon-fav-active.svg";
            corazonAmpliadoDesktop.style.backgroundColor = "#ffffff";
            eventoFavDesktop.setAttribute("corazon", "true");
            let idImgFavActive = `${eventoFavDesktop.getAttribute("key")}`;
            arrayFavoritos.push(idImgFavActive);
            localStorage.setItem("misFavoritos", JSON.stringify(arrayFavoritos));
            corazonAmpliadoDesktop.style.border = "1px solid #ced7e1";
            corazonAmpliadoDesktop.style.borderRadius = "0.3rem";
            corazonAmpliadoDesktop.style.opacity = "1";
            corazonAmpliadoDesktop.style.width = "1.25vw";
            corazonAmpliadoDesktop.style.height = "1.104166666vw";
            corazonAmpliadoDesktop.style.padding = "0.625vw 0.55555555vw";
        }
    }
}


function favImagenAmpliada(params) {

    if (arrayFavoritos.includes(params.getAttribute("key"))) {

        arrayFavoritos.splice(arrayFavoritos.indexOf(params.getAttribute("key")), 1);
        localStorage.setItem("misFavoritos", JSON.stringify(arrayFavoritos));
        btnFavImgAmpliada.src = "assets/assets/icon-fav.svg";
        // localStorage.misFavoritos.clear();
        btnFavImgAmpliada.style.width = "36px";
        btnFavImgAmpliada.style.height = "36px";
        btnFavImgAmpliada.style.padding = "0";
    }
    else {
        btnFavImgAmpliada.src = "assets/assets/icon-fav-active.svg";
        // eventoAmpliar.target.setAttribute("corazon", "true")
        // imgAmplificada.setAttribute("corazon", "true")
        arrayFavoritos.push(params.getAttribute("key"));
        localStorage.setItem("misFavoritos", JSON.stringify(arrayFavoritos));
        btnFavImgAmpliada.style.width = "20px";
        btnFavImgAmpliada.style.height = "18px";
        btnFavImgAmpliada.style.padding = "9px 8px";
        btnFavImgAmpliada.style.borderRadius = "5px";
    }

    console.log(params.getAttribute('key'));
}


//Cargar array de favoritos del usuario:
// function loadFavoritosLs() {
//     let favoritosGifs = JSON.parse(localStorage.getItem("misFavoritos"));
//     if (favoritosGifs) {
//         arrayFavoritos = favoritosGifs;
//     }
// };
// loadFavoritosLs();

//Funcion para descargar el gif en img Ampliada:
async function download() {
    const a = document.createElement("a");
    a.href = await descargarGif();
    a.download = "gif.gif";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
}

async function descargarGif(descargarGif) {
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

//Funcion descargar Gif desktop:
async function downloadDesktop() {
    const a = document.createElement("a");
    a.href = await descargarGifDesktop();
    a.download = "gifDesktop.gif";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
}

async function descargarGifDesktop(eventoDescargar) {
    let btnDescargarPintado = document.getElementById("btnDescargarPintado").getAttribute("key");
    console.log(btnDescargarPintado);
    var source = "https://api.giphy.com/v1/gifs/" + `${btnDescargarPintado}` + "?api_key=umCoI8QE3nt72GLxXUntliERdZW5J6z9";
    let response = await fetch(source);
    let info = await response.json();

    console.log(info.data.images.downsized_large.url);

    return fetch(info.data.images.downsized_large.url).then((response) => {
        return response.blob();
    }).then(blob => {
        return URL.createObjectURL(blob);
    });
}

//Funcion descargar Gif desktop ampliado

async function downloadDesktopAmpliado() {
    const a = document.createElement("a");
    a.href = await descargarGifDesktopAmpliado();
    a.download = "gifDesktop.gif";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
}

async function descargarGifDesktopAmpliado(eventoDescargarAmpliado) {
    let descargaAmpliadaDesktop = document.getElementById("descargaAmpliadaDesktop").getAttribute("key");
    console.log(descargaAmpliadaDesktop);
    var source = "https://api.giphy.com/v1/gifs/" + `${descargaAmpliadaDesktop}` + "?api_key=umCoI8QE3nt72GLxXUntliERdZW5J6z9";
    let response = await fetch(source);
    let info = await response.json();

    console.log(info.data.images.downsized_large.url);

    return fetch(info.data.images.downsized_large.url).then((response) => {
        return response.blob();
    }).then(blob => {
        return URL.createObjectURL(blob);
    });
}

