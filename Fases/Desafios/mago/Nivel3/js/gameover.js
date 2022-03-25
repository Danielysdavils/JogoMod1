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
    window.location.href = "file:///C:/Users/Ebanx/Documents/DanielysEstudio/JogoMod1/Fases/Desafios/mago/Nivel3/html/003.html"
} 