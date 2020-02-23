const menuBtn = document.querySelector("#toggleBtn");
const navbarMenu = document.querySelector(".navbar-menu");
const body = document.querySelector("body");

window.onload = function () {
    doScroll();
}

window.onscroll = function () {
    doScroll();
}

function doScroll() {
    const header = document.querySelector("#header");
    if (document.documentElement.scrollTop > 70) {
        if (!header.classList.contains("navbar-fixed")) {
            header.classList.add("navbar-fixed");
            body.style.marginTop = "70px";
            header.style.display = "none";
            setTimeout(function () {
                header.style.display = "block";
            }, 40)
        }
    } else {
        if (header.classList.contains("navbar-fixex")) {
            header.classList.remove("navbar-fixed");
            body.style.marginTop = "0";
        }
    }
}

function menuToggle() {
    navbarMenu.classList.toggle("show");
}

function init() {
    menuBtn.addEventListener("click", menuToggle);
}

init();

