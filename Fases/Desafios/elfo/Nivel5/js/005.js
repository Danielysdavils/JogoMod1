var botonSeg = document.getElementById("boton02");
var botonRet = document.getElementById("boton01");

var texto = document.getElementById("txt01");
var suich = 0

    if(suich === 0){
    function atras(){
        window.location.href = "../../Nivel4/html/004.html"
        }
    }

    botonSeg.addEventListener("click", function(){
        var suich = 3
        if(suich === 3){

            texto.innerText = `Finalmente, observei que eles não queriam me destruir. Só pegaram os cristais e os levaram até algum lugar desconhecido. Se movimentaram  em fila e seguiram seu caminho.
            Qual é a melhor coisa a fazer?
            `
            botonSeg.style.display = 'none';
            res = Number(suich - 1)

            if(res === 2){
                botonRet.addEventListener("mouseover", function(){
                texto.innerText = `Finalmente, observei que eles não queriam me destruir. Só pegaram os cristais e os levaram até algum lugar desconhecido. Se movimentaram  em fila e seguiram seu caminho.
                Qual é a melhor coisa a fazer?
                `
                botonSeg.style.display = 'flex';})
                res = Number(res - 1)
            }      
        }
            
    })

/* */

var botonEsc = document.getElementById("boton03");


function escolher(){
    
    res = prompt(`Qual é a melhor alternativa a escolher?\n 1 Seguí-los \n 2 Voltar para casa \n 3 Destruí-los`)

    var nVidas = 3;

    while(nVidas >= 1){
        
        if(res.indexOf("2") >= 0){
            alert(`É uma boa ideia!`)
            window.location.href ="../../Nivel6/html/006.html"
            break;
        }else{
            alert(`Acho que não é uma boa ideia! \n Agora você tem ${nVidas} vidas`)
            res = prompt(`Qual é a melhor alternativa a escolher?\n 1 Seguí-los \n 2 Voltar para casa \n 3 Destruí-los`)
            nVidas--;
        }}

    if(nVidas == 0){
        window.location.href = "gameover.html"
    }
}
