var botonSeg = document.getElementById("boton02");
var botonRet = document.getElementById("boton01");

var texto = document.getElementById("txt01");
var suich = 0

    if(suich === 0){
    function atras(){
        window.location.href = "../../Nivel3/html/003.html"
        }
    }

    botonSeg.addEventListener("click", function(){
        var suich = 3
        if(suich === 3){

            texto.innerText = `Quando acordou na sua frente tinha uma enorme quantidade de golens caminhando em sua direção. Ele entrou em pânico, devia correr? batalhar? Estava sozinho. Seu grupo tinha desaparecido entre a neblina. Que pode ser o melhor a fazer?`
            botonSeg.style.display = 'none';
            res = Number(suich - 1)

            if(res === 2){
                botonRet.addEventListener("mouseover", function(){
                texto.innerText = `Não conseguia mexer seu corpo, não tinha forças para continuar. Só ficou ali esperando qualquer coisa acontecer. Esperando até que seus dias cheguem ao fim. Quando iria fechar seus olhos, quando sentia seu peito desgarrando e sem poder mais. O golem pegou os cristais, os uniu e automaticamente, a fumaça desapareceu. Com isso, podia respirar de novo. E lentamente foi recobrando a consciência. `
                botonSeg.style.display = 'flex';})
                res = Number(res - 1)
            }      
        }
            
    })

/* */

var botonEsc = document.getElementById("boton03");


function escolher(){
    
    res = prompt(`Qual é a melhor alternativa a escolher?\n 1 Batalhar \n 2 Esperar \n 3 Fugir`)

    var nVidas = 3;

    while(nVidas >= 1){
        
        if(res.indexOf("2") >= 0){
            alert(`Então ta, acho que é o melhor`)
            window.location.href = "../../Nivel5/html/005.html"
            break;
        }else{
            alert(`Acho que não é uma boa ideia \n Agora você tem ${nVidas} vidas`)
            res = prompt(`Qual é a melhor alternativa a escolher?\n 1 Batalhar \n 2 Esperar \n 3 Fugir``)
            nVidas--;
        }}

    if(nVidas == 0){
        window.location.href = "gameover.html"
    }
}
