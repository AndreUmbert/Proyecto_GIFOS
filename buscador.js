// //Llamar las imagenes que busca el usuario desde giphy
let buscador = document.getElementById("buscarYMas");
// let lupa = document.getElementById("lupa");
let tituloBusqueda = document.getElementById("tituloBusqueda");

let galeria = document.getElementById("galeria");
const URL_BASE = "https://api.giphy.com/v1/gifs/search?api_key=umCoI8QE3nt72GLxXUntliERdZW5J6z9&limit=12&q=";

//al apretar ENTER:
buscador.addEventListener('keypress', async (buscar) => {
    if (buscar.key === 'Enter') {
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
    galeria.innerHTML = ``;
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

//al CLICKEAR sobre VER MAS:
let btnVerMas = document.getElementById("btnVerMas");

btnVerMas.addEventListener('click', async (verMas) => {
    let resultadoBusqueda = await fetch(URL_BASE + buscador.value);
    let json = await resultadoBusqueda.json();
    json.data.forEach(trending => {
        galeria.innerHTML += `
        <img src= "${trending.images.fixed_height.url}">
        `;
    })
});