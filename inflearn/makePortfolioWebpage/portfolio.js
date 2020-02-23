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

// WElCOME section
let imageSlideIndex = 1;
showImageSlides(1);

function imageSlideTimer() {
    plusImageSlides(1);
}

var imageTimer = setInterval(imageSlideTimer, 3000);

function plusImageSlides(n) {
    clearInterval(imageTimer);
    imageTimer = setInterval(imageSlideTimer, 3000);

    showImageSlides(imageSlideIndex += n);
}

function currentImageSlide(n){
    clearInterval(imageTimer);
    imageTimer = setInterval(imageSlideTimer, 3000);

    showImageSlides(imageSlideIndex = n);
}


function showImageSlides(n) {

    const slides = document.querySelectorAll(".image-slide");
    const dots = document.querySelectorAll(".dot");

    if (n > slides.length) {
        imageSlideIndex = 1;
    }

    if (n < 1) {
        imageSlideIndex = slides.length;
    }

    slides.forEach(element => {
        element.style.display = "none";
    });

    dots.forEach(element => {
        element.className = element.className.replace(" active", "");
    });

    slides[imageSlideIndex - 1].style.display = "block";
    dots[imageSlideIndex - 1].className += " active";    
}

document.getElementById('imagePrev').addEventListener('click', plusImageSlides.bind(null,-1));
document.getElementById('imageNext').addEventListener('click', plusImageSlides.bind(null,1));

document.getElementById('firstDot').addEventListener('click', currentImageSlide.bind(null,1));
document.getElementById('secondDot').addEventListener('click', currentImageSlide.bind(null,2));
document.getElementById('thirdDot').addEventListener('click', currentImageSlide.bind(null,3));
document.getElementById('forthDot').addEventListener('click', currentImageSlide.bind(null,4));

init();

