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

function inicio (){
    window.location.href = ("http://127.0.0.1:5500/index.html")
} 