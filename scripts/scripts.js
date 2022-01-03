/*==============================
=          LOAD          =
==============================*/
window.addEventListener("load", function () {
    setTimeout(() => {
    loader = document.querySelector(".loader");
    loader.style.opacity = "0";
    loader.style.transition = "opacity 2s ease";
    setTimeout(() => {
        loader.style.display = "none";
    }, 2000);
    }, 2000);
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
    window.onscroll = function() {
        var windowHeight = $(window).scrollTop();
        var contenido2 = $("#contenido2").offset();
        contenido2 = contenido2.top;
        if(windowHeight >= contenido2  ){
            $('#aviso').fadeIn(100);
        }else{
            $('#aviso').fadeOut(500);
        }
    };
}
function disableScroll() {window.onscroll = function() {};}
function menu__scroll() {
    if (screen.width >= 680) {
        $('#aviso').hide(0);
        enableScroll();
    } else {
        $('#aviso').show(0);
        disableScroll();
    }
    window.onresize = function() {
        if (window.innerWidth >= 768) {
            $('#aviso').hide(0);
            enableScroll();
        } else {
            $('#aviso').show(0);
            disableScroll();
        }
    }
};
window.onload = menu__scroll();
/*=====  End of MENU SCROLL  ======*/

/*==============================
=          MENU MOVIL          =
==============================*/
var menu__mostrar = document.querySelector(".menu__boton");
function menu__movil(){
    
    var contenedor__menu = document.querySelector(".contenedor__menu__movil");
    var menu = document.querySelector(".menu__movil");
    contenedor__menu.classList.toggle("toggle__contenedor__menu");
    menu.classList.toggle("toggle__menu");
    document.querySelector(".body").style.overflowY = "hidden";
}
menu__mostrar.addEventListener("click", menu__movil);
var contenedor__menu = document.querySelector(".contenedor__menu__movil");
var menu = document.querySelector(".menu__movil");
function close__menu__movil(){
    contenedor__menu.classList.remove("toggle__contenedor__menu");
    menu.classList.remove("toggle__menu");
    document.querySelector(".body").style.overflowY = "scroll";
}
contenedor__menu.addEventListener("click",close__menu__movil);
var btn__semestres = document.getElementById("toggle__semestres");
var contenedor__semestres = document.querySelector(".contenedor__menu__movil__semestres");
var enlaces__semestres = document.querySelector(".movil__enlaces__semestres");
function menu__semestres(){
enlaces__semestres.style.display = "flex";
menu.classList.remove("toggle__menu");
contenedor__semestres.classList.toggle("toggle__contenedor__menu");
    setTimeout(() => {
        enlaces__semestres.classList.toggle("toggle__menu");
        document.querySelector(".body").style.overflowY = "hidden";
    }, 500);
}
btn__semestres.addEventListener("click",menu__semestres);
function close__semestres(){
    contenedor__semestres.classList.remove("toggle__contenedor__menu");
    enlaces__semestres.classList.remove("toggle__menu");
document.querySelector(".body").style.overflowY = "scroll";
}
contenedor__semestres.addEventListener("click",close__semestres);
/*=====  End of MENU MOVIL  ======*/

/*==============================
=          DESTACADOS          =
==============================*/
var splide = new Splide( '.vertical-splide', {
    direction: 'ttb',
    type: "loop",
    height   : '10rem',
    wheel    : true,
    arrows: undefined,
    track: undefined,
    autoplay: true,
} );
splide.mount();
/*=====  End of DESTACADOS  ======*/

/*==============================
=          NOTICIAS          =
==============================*/
document.addEventListener( 'DOMContentLoaded', function () {
    new Splide( '#image-slider', {
        type: 'loop',
        autoplay: 'true',
        perPage    : 3,
        gap: 20,
        breakpoints: {
            900:{
            perPage: 2,
            },
            640: {
            perPage: 1,
            },
        },
    } ).mount();
} );
/*=====  End of NOTICIAS  ======*/

/*==================================
=          JOVENES EN CASA        =
==================================*/

document.addEventListener( 'DOMContentLoaded', function () {
    new Splide( '#splide__video', {
        rewind: true,
        perPage: 1,
    } ).mount();
} );


/*=====  End of JOVENES EN CASA  ======*/

/*==============================
=          NOTAS          =
==============================*/
function abrirNotas(){window.open('../pages/notas.html');}
document.querySelector(".button__cont").addEventListener("click",abrirNotas);
/*=====  End of NOTAS  ======*/

