var botonSeg = document.getElementById("boton02");
var botonRet = document.getElementById("boton01");

var texto = document.getElementById("txt01");
var suich = 0

    if(suich === 0){
    function atras(){
        window.location.href = "file:///C:/Users/Ebanx/Documents/DanielysEstudio/JogoMod1/Fases/Desafios/Ana/Nivel3/html/003.html"
        }
    }

    botonSeg.addEventListener("click", function(){
        var suich = 3
        if(suich === 3){

            texto.innerText = `[B]lorem`
            botonSeg.style.display = 'none';
            res = Number(suich - 1)

            if(res === 2){
                botonRet.addEventListener("mouseover", function(){
                texto.innerText = `[A]lorem`
                botonSeg.style.display = 'flex';})
                res = Number(res - 1)
            }      
        }
            
    })

/* */

var botonEsc = document.getElementById("boton03");


function escolher(){
    
    res = prompt(`Qual é a melhor alternativa a escolher?\n 1 lorem \n 2 lorem \n 3 lorem`)

    var nVidas = 3;

    while(nVidas >= 1){
        
        if(res.indexOf("3") >= 0){
            alert(`Muito Bem!`)
            window.location.href = "file:///C:/Users/Ebanx/Documents/DanielysEstudio/JogoMod1/Fases/Desafios/Ana/Nivel5/html/005.html"
            break;
        }else{
            alert(`Poxa essa não deu! Agora você tem ${nVidas}`)
            res = prompt(`Qual é a melhor alternativa a escolher?\n 1 lorem \n 2 lorem \n 3 lorem`)
            nVidas--;
        }}

    if(nVidas == 0){
        window.location.href = "file:///C:/Users/Ebanx/Documents/DanielysEstudio/JogoMod1/Fases/Desafios/Ana/Nivel4/html/gameover.html"
    }
}
