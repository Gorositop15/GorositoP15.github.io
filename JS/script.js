function cambiarcolor(elemento) {
    elemento.style.color ="red" ;
}

function restaurarcolor(elemento) {
    elemento.style.color = "blue" ;
}

const titulo = document.getElementById("titulo");  /*la constante busca en el documento,
 el elemento por el id, en este caso el que se llama titulo */ 
//const parrafo = document.getElementById("parrafo");

titulo.addEventListener("mouseover", function() {
    cambiarcolor(titulo);

});

titulo.addEventListener("mouseout", function() {
    restaurarcolor(titulo);

});

