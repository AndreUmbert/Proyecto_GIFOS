//----------------------------------------------------------------------------------------------------------------------------------------------------------------------
//                                                                         SWITCH Y FUNCIONALIDAD MENU HAMBUGUESA
//----------------------------------------------------------------------------------------------------------------------------------------------------------------------

let menu = document.getElementById("burger");
function abrirMenu() {

    menu.addEventListener("click", () => {
        console.log("click");
        var site_nav = document.getElementById("site-nav");
        if (site_nav.style.display === "block") {
            site_nav.style.display = "none";
            if (localStorage.getItem("darkmode") === "true") {
                burger.src = "./assets/assets/burger-modo-noct.svg";
            } else {
                burger.src = "./assets/assets/burger.svg";
            }
        } else {
            site_nav.style.display = "block";
            menu.src = "./assets/assets/close.svg";
            if (localStorage.getItem("darkmode") === "true") {
                burger.src = "./assets/assets/close-modo-noct.svg";
            } else {
                menu.src = "./assets/assets/close.svg";
            }
        }
    })
}

abrirMenu();
