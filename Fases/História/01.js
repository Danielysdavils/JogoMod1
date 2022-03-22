
function escriba (elemento){ 

    var tituloArray = elemento.innerHTML.split(''); 

    elemento.innerHTML = '';
    
    tituloArray.forEach(function(letra, i){
       setTimeout(function(){
        elemento.innerHTML += letra;
       }, 75*i)
    }) 

}

var titulo = document.getElementById('titulo01');
escriba(titulo)

/**/

var boton02 = document.querySelector("div#boton02")
var newboton02 = document.querySelector("div#boton03")

newboton02.style.display = "none";

function troca (){
    
        var texto = document.querySelector("p.txt01")
        var texto01 = document.querySelector("p.txt02")
        var texto02 = document.querySelector("p.txt03")

        texto.innerText = `Só que um dia, um choque estridente escutou-se em cada pequeno espaço dentro de Taldorem. Alarmando os povos. Sem muita demora, estudiosos determinaram do que se tratava, algo que jamais imaginaram… a fronteira de Omag destruída!  Isso significava que o planeta débil de Preaurous ficaria sem proteção. Mas, não só isso, o único modo em que uma das fronteiras caia é se as fontes que lhe pertencem foram esgotadas. E isso, representava um desbalanço completo para cada realidade;  para a existência das espécies, terras e planetas!`

        texto01.innerText = `Desta forma, Taldorem sendo a única realidade restante, com magia e poder suficiente para resolver o conflito, dispõe de quatro importantes figuras representando cada uma de suas colônias para empreender uma missão de resgate e salvação do que significa existir!`

        texto02.innerText = `E você deverá ajudá-los a cumprir o objetivo! Nossa realidade depende de você.`

        boton02.addEventListener("click", function(){
            boton02.style.display = "none"; 
            newboton02.style.display = "flex";   
        })
           
}



