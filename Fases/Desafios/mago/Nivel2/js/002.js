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

            texto.innerText = `Até que chega na fase final, onde anunciam a recompensa maior. Um saco de ouro e diamantes além do cargo de liderança do exército. Mas, o risco de não sair com vida ou perdê-lo tudo. Devo parar ou continuar pelo prêmio maior?`
            botonSeg.style.display = 'none';
            res = Number(suich - 1)

            if(res === 2){
                botonRet.addEventListener("mouseover", function(){
                texto.innerText = `E claro, nossa determinada moça não duvidaria em se postular. Imediatamente causou uma revolta entre os candidatos que estavam na fila. ‘’Como poderia essa menina ter coragem para estar ali?’’ , ‘’Que menina doida!’’. Como sempre, sem parecer afetada pelos comentários, pega a pluma e escreve seu nome na folha. Dando seu último suspiro e preparando-se para atuar. Depois de uma semana de preparação, o evento começa. 
                Deixada de última na hora da competição, precisa combater contra outros guerreiros e até companheiros de turma. E claro, como esperado. Deixa todo mundo no palco de boca aberta com suas habilidades e atitude. Inspirando muitas meninas que inclusive estavam assistindo o show.
            `
                botonSeg.style.display = 'flex';})
                res = Number(res - 1)
            }      
        }
            
    })

/* */

var botonEsc = document.getElementById("boton03");


function escolher(){
    
    res = prompt(`Qual é a melhor alternativa a escolher?\n 1 Parar \n 2 Reclamar e Sair \n 3 Continuar`)

    var nVidas = 3;

    while(nVidas >= 1){
        
        if(res.indexOf("3") >= 0){
            alert(`Estou pronta!`)
            window.location.href = "../../Nivel3/html/003.html"
            break;
        }else{
            alert(`Como posso parar agora? Olha o tanto que fiz até aqui. \n Agora você tem ${nVidas} vidas`)
            res = prompt(`Qual é a melhor alternativa a escolher?\n 1 Parar \n 2 Reclamar e Sair \n 3 Continuar`)
            nVidas--;
        }}

    if(nVidas == 0){
        window.location.href = "gameover02.html"
    }
}
