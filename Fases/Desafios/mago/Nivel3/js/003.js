var botonSeg = document.getElementById("boton02");
var botonRet = document.getElementById("boton01");

var texto = document.getElementById("txt01");
var suich = 0

    if(suich === 0){
    function atras(){
        window.location.href = "../../Nivel2/html/002.html"
        }
    }

    botonSeg.addEventListener("click", function(){
        var suich = 3
        if(suich === 3){

            texto.innerText = `Quando o golem sai por completo, sua atitude a deixa confusa. Sua aparência parecia diferente, seu próprio corpo parecia maltratado. O golem se recusava a brigar. Talvez pela dor que estaria sentindo. Nesse momento, quatro magos instrutores deram a ordem de atosigar o golem fazendo-o ficar exaltado, com muita raiva. Lastimaram parte de seu corpo e com isso, ele já estava pronto para poder começar.  
            Ela tenta se concentrar, tenta manter o foco mas pensamentos a perturbam. Qual é a melhor coisa que pode fazer?
        `
            botonSeg.style.display = 'none';
            res = Number(suich - 1)

            if(res === 2){
                botonRet.addEventListener("mouseover", function(){
                texto.innerText = `Estava preparada. Quando as portas se abrem para iniciar o duelo, o contrincante a deixa perplexa. Um golem estava saindo, um golem de quatro metros. O que de certa forma era estranho, eles costumam ser ainda maiores! Ela se concentra, lembrando as coisas que a trouxeram até aqui. Todas as coisas pelas quais passou. Tudo foi um grande e importante aprendizado. Talvez deseje mudar algumas coisas, principalmente todas as vezes que ficou quieta, que ficou fingindo que nada aconteceu, mas nada disso importava. Agora as coisas iriam mudar, ela estava pronta. `
                botonSeg.style.display = 'flex';})
                res = Number(res - 1)
            }      
        }
            
    })

/* */

var botonEsc = document.getElementById("boton03");


function escolher(){
    
    res = prompt(`Qual é a melhor alternativa a escolher?\n 1 Desistir da batalha \n 2 Concentrarse, focar no objetivo \n 3 Não fazer nada`)

    var nVidas = 3;

    while(nVidas >= 1){
        
        if(res.indexOf("2") >= 0){
            alert(`Preciso focar! Preciso demostrar que sim sou alguém que vale a pena!`)
            window.location.href = "../../Nivel4/html/004.html"
            break;
        }else{
            alert(`Não posso desistir! Não.. não... não? \n Agora você tem${nVidas} vidas`)
            res = prompt(`Qual é a melhor alternativa a escolher?\n 1 Desistir da batalha \n 2 Concentrarse, focar no objetivo \n 3 Não fazer nada`)
            nVidas--;
        }}

    if(nVidas == 0){
        window.location.href = "gameover.html"
    }
}
