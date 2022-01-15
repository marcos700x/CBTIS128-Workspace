var contenedor__frase = document.querySelector(".subtitulo__404");
var frases = ["¡Te juro que un perro se comío esta pagina!", "¡¿La pagína tenía que estar lista para hoy?!", "La cafetería esta cerrada, vuelve en otra ocasión.", "¿Dónde deje la pagina? ¡Debería estar en mi mochila!","Profe, ¿Puedo entregar la pagina mañana?","Puedes ir a la cafetería mientras buscamos la pagina."];
var lenghtFrases = frases.length;
var randonNumber = Math.ceil(Math.random() * lenghtFrases) - 1 ;
contenedor__frase.innerHTML = frases[randonNumber];
