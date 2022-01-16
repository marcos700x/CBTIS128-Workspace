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