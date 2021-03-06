//----------------------------------------------------------------------------------------------------------------------------------------------------------------------
//                                                                             HOVERS HEADER
//----------------------------------------------------------------------------------------------------------------------------------------------------------------------
let btnCrearGifos = document.getElementById("btnCrearGifos");
let imgBtnCrearGifos = document.getElementById("imgBtnCrearGifos");

function setImgCrearGifosNueva() {
    if (localStorage.getItem("darkmode") === "true") {
        imgBtnCrearGifos.src = "./assets/assets/CTA-crear-gifo-hover-modo-noc.svg";
    } else {
        imgBtnCrearGifos.src = "./assets/assets/CTA-crear-gifo-hover.svg";

    }
}

function setImgVolver() {
    if (localStorage.getItem("darkmode") === "true") {
        imgBtnCrearGifos.src = "./assets/assets/CTA-crear-gifo-modo-noc.svg";
    } else {
        imgBtnCrearGifos.src = "./assets/assets/button-crear-gifo.svg";
    }
}

//----------------------------------------------------------------------------------------------------------------------------------------------------------------------
//                                                                            HOVERS FOOTER
//----------------------------------------------------------------------------------------------------------------------------------------------------------------------

let fbIcon = document.getElementById("imagenIconoFacebook");
function setHoverIconFb() {
    fbIcon.src = "./assets/assets/icon_facebook_hover.svg";

}

function setHoverIconFbVolver() {
    fbIcon.src = "./assets/assets/icon_facebook.svg";
}

let twitterIcon = document.getElementById("imagenIconoTwitter");
function setHoverIconTwitter() {
    twitterIcon.src = "./assets/assets/icon-twitter-hover.svg";

}

function setHoverIconTwitterVolver() {
    twitterIcon.src = "./assets/assets/icon-twitter.svg";
}

let instagramIcon = document.getElementById("imagenIconoInstagram");
function setHoverIconInstagram() {
    instagramIcon.src = "./assets/assets/icon_instagram-hover.svg";

}

function setHoverIconInstagramVolver() {
    instagramIcon.src = "./assets/assets/icon_instagram.svg";
}