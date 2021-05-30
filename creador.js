let creadorGifos = document.getElementById("creadorGifos");

imgBtnCrearGifos.addEventListener('click', (apCreador) => {
    imgBtnCrearGifos.setAttribute("toggle", "false");
    console.log(imgBtnCrearGifos.toggle);
    creadorGifos.style.display = "block";
    imgBtnCrearGifos.toggle = "true";
    sectionFavoritos.style.display = "none";
    sectionMisGifos.style.display = "none";
    trendingGifos.style.display = "none";
    if (!pantallaDesktop.matches) {
        site_nav.style.display = "none";
    }
    imgBtnCrearGifos.src = "./assets/assets/CTA-crear-gifo-active-modo-noc.svg";
});



