var botonSeg = document.getElementById("boton02");
var botonRet = document.getElementById("boton01");

var texto = document.getElementById("txt01");
var suich = 0

    if(suich === 0){
    function atras(){
        window.location.href = "../../Nivel1/html/001.html"
        }
    }

    botonSeg.addEventListener("click", function(){
        var suich = 3
        if(suich === 3){

            texto.innerText = `[A] Nosso seguinte objetivo é identificar onde se encontra o inimigo. Como você já deve saber, as fontes da realidade foram disseminadas por algum corpo não identificado, isso significa que devemos ter muito cuidado. Preaureus é um lugar muito estranho, ainda bem que não sou daqui. Utilizam tecnologias bem primitivas então deve ser simples encontrar qualquer coisa esquisita pelos arredores. Observemos com atenção o que podemos encontrar e que pode parecer fora do comum.  `
            botonSeg.style.display = 'none';
            res = Number(suich - 1)

            if(res === 2){
                botonRet.addEventListener("mouseover", function(){
                texto.innerText = `[A] Como imaginei, conseguimos sair de lá sem nenhum problema! Porque você está me olhando desse jeito? Imaginou que eu iria roubar ou pedir ajuda! hahaha. É até divertido fazer esta missão com você. Por favor, entenda que eu posso fazer as coisas sozinha. Sou altamente competente. Porque você acha que me escolheram nessa missão? O que realmente não entendo, é porque você está comigo, mas enfim, vamos continuar. Agora, deixe de perder o tempo e preste atenção...`
                botonSeg.style.display = 'flex';})
                res = Number(res - 1)
            }      
        }
            
    })

/* */

var botonEsc = document.getElementById("boton03");


function escolher(){
    
    res = prompt(`Qual é a melhor alternativa a escolher?\n 1 Coelho \n 2 Fazendeiro \n 3 Golem`)

    var nVidas = 3;

    while(nVidas >= 1){
        
        if(res.indexOf("3") >= 0){
            alert(`Humanos são capazes de lançar bolas de gelo tão grandes? Com certeza não! Corra rápido e não fique esperando! Precisamos ser rápidos.`)
            window.location.href = "../../Nivel3/html/003.html"
            break;
        }else{
            alert(`É um pouco estranho, mas não parece perigoso! Agora você tem ${nVidas} vidas`)
            res = prompt(`Qual é a melhor alternativa a escolher?\n 1 Coelho \n 2 Fazendeiro \n 3 Golem`)
            nVidas--;
        }}

    if(nVidas == 0){
        window.location.href = "gameover02.html"
    }
}
