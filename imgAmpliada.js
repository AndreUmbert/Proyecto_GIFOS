// const arrayImagenes = document.querySelectorAll(".imgBuscada");

async function ampliar() {
    const arrayImagenes = document.querySelectorAll(".imgBuscada");
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
                btnFavImgAmpliada.src = "assets/assets/icon-fav-hover.svg";
                location.reload()
            });
            if (arrayFavoritos.includes(eventoAmpliar.target.getAttribute("key"))) {
                btnFavImgAmpliada.src = "assets/assets/icon-fav-active.svg";
            } else {
                btnFavImgAmpliada.src = "assets/assets/icon-fav-hover.svg";
            }
            btnFavImgAmpliada.setAttribute("key", `${eventoAmpliar.target.getAttribute("key")}`)
            btnFavImgAmpliada.addEventListener('click', (eventoFavorito) => {
                if (arrayFavoritos.includes(eventoAmpliar.target.getAttribute("key"))) {
                    arrayFavoritos.splice(arrayFavoritos.indexOf(eventoAmpliar.target.getAttribute("key")), 1);
                    localStorage.clear();
                    localStorage.setItem("misFavoritos", JSON.stringify(arrayFavoritos));
                    btnFavImgAmpliada.src = "assets/assets/icon-fav-hover.svg";
                } else {
                    btnFavImgAmpliada.src = "assets/assets/icon-fav-active.svg";
                    eventoAmpliar.target.setAttribute("corazon", "true")
                    imgAmplificada.setAttribute("corazon", "true")
                    let idImgFavActive = `${imgAmplificada.getAttribute("key")}`;
                    arrayFavoritos.push(idImgFavActive);
                    localStorage.setItem("misFavoritos", JSON.stringify(arrayFavoritos));
                }
            });
            let btnDescargarImgAmpliada = document.getElementById("btnDescargarImgAmpliada");
            // console.log(btnDescargarImgAmpliada);
            btnDescargarImgAmpliada.addEventListener('click', (eventoDescargar) => {
                console.log("click");
                console.log(eventoDescargar);
                download();
            });
        });
    });
}



//Cargar array de favoritos del usuario:
function loadFavoritosLs() {
    let favoritosGifs = JSON.parse(localStorage.getItem("misFavoritos"));
    if (favoritosGifs) {
        arrayFavoritos = favoritosGifs;
    }
};
loadFavoritosLs();

//Funcion para descargar el gif:
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