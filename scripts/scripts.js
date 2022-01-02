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
    }
  }
  btn__mostrar.addEventListener("click", show__video);
  btn__ocultar.addEventListener("click", hide__video);
  
  
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
  
  function enableScroll() {
    window.onscroll = function() {
      var windowHeight = $(window).scrollTop();
      var contenido2 = $("#contenido2").offset();
      contenido2 = contenido2.top;
      if(windowHeight >= contenido2  ){
        $('#aviso').fadeIn(500);
      }else{
        $('#aviso').fadeOut(500);
      }
    };
  }
  function disableScroll() {
    window.onscroll = function() {};
  }
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