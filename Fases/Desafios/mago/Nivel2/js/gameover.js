function escriba (elemento){ 

    var tituloArray = elemento.innerHTML.split(''); 

    elemento.innerHTML = '';
    
    tituloArray.forEach(function(letra, i){
       setTimeout(function(){
        elemento.innerHTML += letra;
       }, 90*i)
    }) 

}

var titulo = document.getElementById('texto');
escriba(titulo)


/*-------------------------------------------------------------------------------------------*/

var boton = document.getElementById("boton")

function denovo (){
    window.location.href = "002.html"
} 