var showBtn = document.querySelector(".header__show__video__button");
var hideBtn = document.querySelector(".hide__video__button");
function show__video(){
    var video__contenedor = document.querySelector(".video__contenedor");
    var video = document.querySelector(".video");
    if(video__contenedor.style.display = "none"){
        video__contenedor.style.display = "flex";
        video.style.display = "block";
        video.style.transition = "transform .5s ease";
        setTimeout(() => {
            video.style.transform = "scale(1)";
        }, 0);
    }
}
function hide__video(){
    var video__contenedor = document.querySelector(".video__contenedor");
    var video = document.querySelector(".video");
    if(video__contenedor.style.display = "flex"){
        video.style.transform = "scale(0)";
        setTimeout(() => {
            video.style.display = "none";
            video__contenedor.style.display = "none";
        }, 500);
    }
}
showBtn.addEventListener("click",show__video);
hideBtn.addEventListener("click",hide__video);


