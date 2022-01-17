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
=          VIDEO          =
==============================*/
var btn__mostrar = document.querySelector(".video__mostrar");
var btn__ocultar = document.querySelector(".video__ocultar");
function show__video() {
  var video__contenedor = document.querySelector(".video__contenedor");
  var video = document.querySelector(".video");
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
=          MENU SCROLL          =
==============================*/
function enableScroll() {
  window.onscroll = function () {
    var windowHeight = $(window).scrollTop();
    var main = $("#main").offset();
    main = main.top;
    if (windowHeight >= main) {
      $("#header__menu").fadeIn(500);
    } else {
      $("#header__menu").fadeOut(500);
    }
  };
}
function disableScroll() {window.onscroll = function () {};}
function menu__scroll() {
  if (screen.width >= 680) {
    $("#header__menu").hide(0);
    enableScroll();
  } else {
    $("#header__menu").show(0);
    disableScroll();
  }
  window.onresize = function () {
    if (window.innerWidth >= 768) {
      $("#header__menu").hide(0);
      enableScroll();
    } else {
      $("#header__menu").show(0);
      disableScroll();
    }
  };
}
window.onload = menu__scroll();
/*=====  End of MENU SCROLL  ======*/
/*==============================
=          MENU MOVIL          =
==============================*/
var menu__mostrar = document.querySelector(".menu__boton");
function menu__movil() {
  var contenedor__menu = document.querySelector(".contenedor__menu__movil");
  var menu = document.querySelector(".menu__movil");
  contenedor__menu.classList.toggle("toggle__contenedor__menu");
  menu.classList.toggle("toggle__menu");
  document.querySelector(".body").style.overflowY = "hidden";
}
menu__mostrar.addEventListener("click", menu__movil);
var contenedor__menu = document.querySelector(".contenedor__menu__movil");
var menu = document.querySelector(".menu__movil");
function close__menu__movil() {
  contenedor__menu.classList.remove("toggle__contenedor__menu");
  menu.classList.remove("toggle__menu");
  document.querySelector(".body").style.overflowY = "scroll";
}
contenedor__menu.addEventListener("click", close__menu__movil);
var btn__semestres = document.getElementById("toggle__semestres");
var contenedor__semestres = document.querySelector(
  ".contenedor__menu__movil__semestres"
);
var enlaces__semestres = document.querySelector(".movil__enlaces__semestres");
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
=          NOTICIAS          =
==============================*/
document.addEventListener("DOMContentLoaded", function () {
  new Splide("#noticias__splide", {
    classes: {
      prev  : 'splide__arrow--prev noticias__arrow',
      next  : 'splide__arrow--next noticias__arrow',
      pagination: 'splide__pagination noticias__pagination',
    },
    type: "loop",
    autoplay: "true",
    perPage: 3,
    perMove: 1,
    interval: 3000,
    gap: 20,
    breakpoints: {
      900: {
        perPage: 2,
      },
      640: {
        perPage: 1,
      },
    },
  }).mount();
});

/*==============================
=          DESTACADOS          =
==============================*/
var splide = new Splide(".destacados__splide", {
  classes: {
    track  : 'splide__track destacados__track',
  },
  direction: "ttb",
  type: "loop",
  height: 300,
  wheel: true,
  arrows: false,
  track: false,
  pagination: false,
  autoplay: true,
});
splide.mount();
/*=====  End of DESTACADOS  ======*/

/*==================================
=          NOTAS        =
==================================*/
notas__mas = document.getElementById('notas__mas');
function abrir__notas(){
  window.open("../pages/notas.html");
}

notas__mas.addEventListener("click", abrir__notas);
// notas__menos.addEventListener("click", notas__ocultar);
/*=====  End of NOTAS  ======*/

/*==================================
=          JOVENES EN CASA        =
==================================*/
new Splide( '#jovenes__splide', {
  rewind: true,
  classes: {
    prev  : 'splide__arrow--prev jovenes__arrow jovenes__splide',
    next  : 'splide__arrow--next jovenes__arrow',
  },
  breakpoints: {
    480:{
      arrows: false,
    }
  },
}).mount();
/*=====  End of JOVENES EN CASA  ======*/
