let menu = document.getElementById("burger");
function abrirMenu() {

    menu.addEventListener("click", () => {
        console.log("click");
        var site_nav = document.getElementById("site-nav");
        if (site_nav.style.display === "block") {
            site_nav.style.display = "none";
            menu.src = "./assets/assets/burger.svg"
        } else {
            site_nav.style.display = "block";
            menu.src = "./assets/assets/close.svg";
        }
    })
}

abrirMenu();
