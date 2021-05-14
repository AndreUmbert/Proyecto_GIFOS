var carrusel = document.getElementById("carruselTrendingGifos");
const URL_Trending = "https://api.giphy.com/v1/gifs/trending?api_key=umCoI8QE3nt72GLxXUntliERdZW5J6z9&limit=3";





let mostrarTrending = async () => {
    let resultado = await fetch(URL_Trending);
    let json = await resultado.json();
    json.data.forEach(trending => {
        carrusel.innerHTML += `
            <img id="${trending.id}" class="imgBuscadaCarrusel" nombre="${trending.username}" titulo="${trending.title}"  src="${trending.images.fixed_height.url}">
    `;
    });
    let arrayImagenesCarrusel = document.querySelectorAll(".imgBuscadaCarrusel");
    arrayImagenesCarrusel.forEach(imagenesCarrusel => {
        if (pantallaDesktop.matches) {
            site_nav.style.display = "block";
            console.log("pantallaDesktop");
            imagenesCarrusel.addEventListener('mouseover', (eventoPintar) => {
                // console.log(eventoPintar.target.getAttribute("key"));
                let divHover = document.getElementById(eventoPintar.target.getAttribute("key"));

                divHover.style.display = "block";

                divHover.addEventListener('mouseout', () => {
                    divHover.style.display = "none";
                });
            });
        }
    });
}


mostrarTrending();


