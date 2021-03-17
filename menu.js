function abrirMenu() {
    var menu =document.getElementById("burger");
    menu.addEventListener("click", ()=>{
        console.log("click");
        var x = document.getElementById("site-nav"); 
        if (x.style.display === "block") { 
            x.style.display = "none"; 
        } else { 
            x.style.display = "block"; 
        } 
    })
}

abrirMenu();
