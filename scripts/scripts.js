/*==============================
=          LOAD          =
==============================*/
window.addEventListener("load", function () {
    setTimeout(() => {
        loader = document.querySelector(".loader");
        loader.style.opacity = "0";
        loader.style.transition = "opacity 1s ease";
        setTimeout(() => {
        loader.style.display = "none";
        }, 1000);
    }, 1000);
});
/*=====  End of LOAD  ======*/

/*==============================
=          MENU SCROLL          =
==============================*/
function enableScroll() {
    window.onscroll = function () {
        var windowHeight = $(window).scrollTop();
        var main = $("#main").offset();
        main = main.top;
        if (windowHeight >= main) {
        $("#menu").fadeIn(500);
        } else {
        $("#menu").fadeOut(500);
        }
    };
}
function disableScroll() {
    window.onscroll = function () {};
}
function menu__scroll() {
    if (screen.width >= 980) {
        $("#menu").hide(0);
        enableScroll();
    } else {
        $("#menu").show(0);
        disableScroll();
    }
    window.onresize = function () {
        if (window.innerWidth >= 980) {
        $("#menu").hide(0);
        enableScroll();
        } else {
        $("#menu").show(0);
        disableScroll();
        }
    };
}
window.onload = menu__scroll();
/*=====  End of MENU SCROLL  ======*/

/*==============================
=          MENU MOVIL          =
==============================*/
var menu__mostrar = document.querySelector(".boton__movil");
var contenedor__menu = document.querySelector(".menu__movil");
var menu = document.querySelector(".movil__lista");

function menu__movil() {
    contenedor__menu.classList.toggle("toggle__contenedor__menu");
    menu.classList.toggle("toggle__menu");
    document.querySelector(".body").style.overflowY = "hidden";
}
menu__mostrar.addEventListener("click", menu__movil);

function close__menu__movil() {
    contenedor__menu.classList.remove("toggle__contenedor__menu");
    menu.classList.remove("toggle__menu");
    document.querySelector(".body").style.overflowY = "scroll";
}
contenedor__menu.addEventListener("click", close__menu__movil);

var btn__semestres = document.getElementById("toggle__semestres");
var contenedor__semestres = document.querySelector(".menu__semestres");
var enlaces__semestres = document.querySelector(".semestres__lista");

function menu__semestres() {
    enlaces__semestres.style.display = "flex";
    menu.classList.remove("toggle__menu");
    contenedor__semestres.classList.toggle("toggle__contenedor__menu");
    setTimeout(() => {
        enlaces__semestres.classList.toggle("toggle__menu");
        document.querySelector(".body").style.overflowY = "hidden";
    }, 500);
}
btn__semestres.addEventListener("click", menu__semestres);

function close__semestres() {
    contenedor__semestres.classList.remove("toggle__contenedor__menu");
    enlaces__semestres.classList.remove("toggle__menu");
    document.querySelector(".body").style.overflowY = "scroll";
}
contenedor__semestres.addEventListener("click", close__semestres);
/*=====  End of MENU MOVIL  ======*/

/*==============================
=          VIDEO          =
==============================*/
var btn__mostrar = document.querySelector(".video__mostrar");
var btn__ocultar = document.querySelector(".video__ocultar");
var video__contenedor = document.querySelector(".video__contenedor");
var video = document.querySelector(".video");

function show__video() {
    if ((video__contenedor.style.display = "none")) {
        video__contenedor.style.display = "flex";
        video__contenedor.style.opacity = "0";
        video__contenedor.style.transition = "opacity .5s ease";
        video.style.display = "block";
        video.style.transition = "transform .5s ease";
        setTimeout(() => {
            video.style.transform = "scale(1)";
            video__contenedor.style.opacity = "1";
        }, 0);
        video.play();
        document.querySelector("body").style.overflowY = "hidden";
    }
}
function hide__video() {
    var video__contenedor = document.querySelector(".video__contenedor");
    var video = document.querySelector(".video");
    if ((video__contenedor.style.display = "flex")) {
        video.style.transform = "scale(0)";
        video__contenedor.style.transition = "opacity .5s ease";
        video__contenedor.style.opacity = "0";
        setTimeout(() => {
        video.style.display = "none";
        video__contenedor.style.display = "none";
        }, 500);
        video.pause();
        document.querySelector("body").style.overflowY = "scroll";
    }
}
btn__mostrar.addEventListener("click", show__video);
btn__ocultar.addEventListener("click", hide__video);
/*=====  End of VIDEO  ======*/

/*==============================
=          NOTICIAS          =
==============================*/
var noticias__splide = new Splide("#noticias__splide", {
    classes: {
        page: 'splide__pagination__page noticias__pagination__pages',
    },
    type: "loop",
    autoplay: "true",
    arrows: true,
    pagination: false,
    perPage: 3,
    perMove: 1,
    interval: 3000,
    gap: 20,
    breakpoints: {
        900: {
        arrows: true,
        perPage: 2,
        },
        640: {
        arrows: false,
        perPage: 1,
        },
        480: {
        perPage: 1,
        arrows: false,
        }
    },
    }); 
 
  
noticias__splide.mount();
var bar = noticias__splide.root.querySelector( '.splide__progress__bar__noticias' );
  
// Update the bar width:
noticias__splide.on( 'mounted move', function () {
  var end = noticias__splide.Components.Controller.getEnd() + 1;
  bar.style.width = String( 100 * ( noticias__splide.index + 1 ) / end ) + '%';
} );
/*=====  End of NOTICIAS  ======*/

/*==============================
=          DESTACADOS          =
==============================*/
var destacados__splide = new Splide(".destacados__splide", {
    direction: "ttb",
    type: "loop",
    height: 300,
    breakpoints: {
        760: {
            height: '42vw'
        },
    },
    wheel: true,
    arrows: false,
    track: false,
    pagination: false,
    autoplay: true,
});
destacados__splide.mount();
/*=====  End of DESTACADOS  ======*/

/*==================================
=          JOVENES EN CASA        =
==================================*/
var jovenes__splide = new Splide( '#jovenes__splide', {
    rewind: true,
    classes: {
        page: 'splide__pagination__page jovenes__pagination__pages',
    },
    breakpoints: {
        480:{
            arrows: false,
        }
    },
    type: "loop",
    autoplay: true,
    });
jovenes__splide.mount();
/*=====  End of JOVENES EN CASA  ======*/


ScrollReveal().reveal('.destacados__contenedor', {
  origin: 'left',
  distance: '100px',
  duration: 1000,
});
ScrollReveal().reveal('.educacion__img', {
  origin: 'left',
  distance: '100px',
  duration: 1000,
});
ScrollReveal().reveal('.notas__contenedor', {
  origin: 'left',
  distance: '100px',
  duration: 1000,
});

