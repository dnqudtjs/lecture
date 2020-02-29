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

// portfolio section

filterSelection("all");

function filterSelection(id) {
    const listItem = document.querySelectorAll(".listItem");
    const filterItem = document.querySelectorAll(".filterItem");
    
    listItem.forEach(e => {
        if (e.id == id) {
            e.classList.add("active");
        } else {
            e.classList.remove("active");
        }
    });

    let cnt = 0;
    filterItem.forEach(e => {
        if (id == "all" || e.classList.contains(id)) {
            e.classList.add("show");
        } else {
            e.classList.remove("show");
        }
    });
}

function viewPortfolio(event) {
    const portfolioModal = document.querySelector("#portfolioModal");
    const close = document.querySelector("#modalClose");
    portfolioModal.style.display = "block";
    const overlay = (event.target.tagName.toLowerCase() == "i") ? event.target.parentNode : event.target;
    const image = overlay.nextElementSibling;

    const imageDiv = overlay.parentNode;
    const mainDiv = imageDiv.nextElementSibling;
    const subDiv = mainDiv.nextElementSibling;
    const textDiv = subDiv.nextElementSibling;

    const imageModal = document.querySelector("#modalImage");
    const mainModal = document.querySelector("#modalMain");
    const subModal = document.querySelector("#modalSub");
    const textModal = document.querySelector("#modalText");

    imageModal.src = image.src;
    mainModal.innerHTML = mainDiv.innerHTML;
    subModal.innerHTML = subDiv.innerHTML;
    textModal.innerHTML = textDiv.innerHTML;
    

    close.addEventListener("click", function () {
        portfolioModal.style.display = "none";
    });


}

document.querySelector("#all").addEventListener("click", filterSelection.bind(null, "all"));
document.querySelector("#uiux").addEventListener("click", filterSelection.bind(null, "uiux"));
document.querySelector("#java").addEventListener("click", filterSelection.bind(null, "java"));
document.querySelector("#db").addEventListener("click", filterSelection.bind(null, "db"));

const filterItem = document.querySelectorAll(".filterItem");
filterItem.forEach(e => {
    e.addEventListener("click", viewPortfolio);
});



/* REVIEW AREA */
var reviewSlideIndex = 0;

function reviewSlideTimer() {
  plusReviewSlides(1);
}

var reviewTimer = setInterval(reviewSlideTimer, 3000);

function plusReviewSlides(n) {
  clearInterval(reviewTimer);
  reviewTimer = setInterval(reviewSlideTimer, 3000);
  showReviewSlides(reviewSlideIndex += n);
}

function showReviewSlides(n) {
    const review_slides = document.querySelectorAll(".review-slide");

    if (n > review_slides.length - 3) {
        reviewSlideIndex = 0;
    }

    if (n < 0) {
        reviewSlideIndex = review_slides.length - 3;
    }

    review_slides.forEach(e => {
        e.classList.remove("show");
        e.classList.remove("res-show");
        e.classList.add("hide");
    });

    review_slides[reviewSlideIndex].classList.remove("hide");
    review_slides[reviewSlideIndex].classList.add("res-show");
    review_slides[reviewSlideIndex + 1].classList.remove("hide");
    review_slides[reviewSlideIndex + 1].classList.add("show");
    review_slides[reviewSlideIndex + 2].classList.remove("hide");
    review_slides[reviewSlideIndex + 2].classList.add("show");
}
document.getElementById('reviewPrev').addEventListener('click', plusReviewSlides.bind(null,-1));
document.getElementById('reviewNext').addEventListener('click', plusReviewSlides.bind(null,1));

/* ANCHOR */
function moveTo(id) {
    if(id == 'brand'){
      window.scrollTo(0, 0);
    } else {
      window.scrollTo(0, document.getElementById(id).offsetTop - 70);
    }
    document.getElementById('menu').classList.remove('show');
  }
  
  document.getElementById('navbarBrand').addEventListener('click', moveTo.bind(null,'brand'));
  document.getElementById('navbarAbout').addEventListener('click', moveTo.bind(null,'about'));
  document.getElementById('navbarService').addEventListener('click', moveTo.bind(null,'service'));
  document.getElementById('navbarPortfolio').addEventListener('click', moveTo.bind(null,'portfolio'));
  document.getElementById('navbarReview').addEventListener('click', moveTo.bind(null,'review'));

init();



