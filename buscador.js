// //Llamar las imagenes que busca el usuario desde giphy
let buscador = document.getElementById("buscarYMas");
let tituloBusqueda = document.getElementById("tituloBusqueda");
let busquedaSection = document.getElementById("busqueda");
let galeria = document.getElementById("galeria");
let pjsGifos = document.getElementById("pjsGifos");
let tituloInicio = document.getElementById("titulo");
let lupa = document.getElementById("lupa");
var site_nav = document.getElementById("site-nav");
let favoritos = document.getElementById("favoritos");
const URL_BASE = "https://api.giphy.com/v1/gifs/search?api_key=umCoI8QE3nt72GLxXUntliERdZW5J6z9&limit=12&q=";

//al apretar ENTER:
buscador.addEventListener('keypress', async (buscar) => {
    if (buscar.key === 'Enter') {
        favoritos.style.display = "none";
        site_nav.style.display= "none";
        busquedaSection.style.display = "Block"
        pjsGifos.style.display = "none";
        tituloInicio.style.display = "none";
        lupa.src="./assets/assets/close.svg";
        // lupa.style.width = ;
        galeria.innerHTML = ``;
        console.log(buscar.target.value);
        let resultadoBusqueda = await fetch(URL_BASE + buscar.target.value)
        let json = await resultadoBusqueda.json();
        json.data.forEach(trending => {
            galeria.innerHTML += `
            <img src="${trending.images.fixed_height.url}">
            `;
            tituloBusqueda.innerHTML = `${buscar.target.value}`;
            tituloBusqueda.style.textTransform = "capitalize";
        });
    }
});

//al CLICKEAR sobre la lupa:

lupa.addEventListener('click', async (buscarEnLupa) => {
    busquedaSection.style.display = "Block"
    let resultadoBusqueda = await fetch(URL_BASE + buscador.value);
    let json = await resultadoBusqueda.json();
    json.data.forEach(trending => {
        galeria.innerHTML += `
        <img src= "${trending.images.fixed_height.url}">
        `;
        tituloBusqueda.innerHTML = `${buscador.value}`;
        tituloBusqueda.style.textTransform = "capitalize";
    })
});

//al CLICKEAR sobre la cruz:



//al CLICKEAR sobre VER MAS:
let btnVerMas = document.getElementById("btnVerMas");

btnVerMas.addEventListener('click', async (verMas) => {
    busquedaSection.style.display = "Block";
    let resultadoBusqueda = await fetch(URL_BASE + buscador.value);
    let json = await resultadoBusqueda.json();
    json.data.forEach(trending => {
        galeria.innerHTML += `
        <img src= "${trending.images.fixed_height.url}">
        `;
    })
});




// console.log(buscarYMas.value);

console.log(typeof(buscador.value));
if (buscador.value === "") {
    busquedaSection.style.display = "none";
} 