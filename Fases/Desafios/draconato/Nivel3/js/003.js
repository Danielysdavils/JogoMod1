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

            texto.innerText = `Dá alguns passos e nesse momento dá um sopro de fogo, imediatamente fazendo as crianças do lugar chorarem e correr apavoradas. Ele dá um passo a mais, chegando um pouco mais perto. Sente a frustração no seu rosto e no momento que uma das crianças do lugar cai na sua frente, e o enxerga com tanto medo. Com um olhar de desesperação, com essas lágrimas caindo pouco a pouco. Nesse momento, ele não conseguiu segurar. Nessa mirada de medo por trás dessa criança, viu seu reflexo de pavor. Quão assustador é enfrentar essas sombras dentro. E ele sabia perfeitamente que não era assim.  Que ele odiava destruir, odiava lutar. 
            Tinha duas opções, continuar com aquilo para o que foi feito, ou deixar de segurar - assim seja por só um momento -, essa máscara que levava por toda sua vida.
            `
            botonSeg.style.display = 'none';
            res = Number(suich - 1)

            if(res === 2){
                botonRet.addEventListener("mouseover", function(){
                texto.innerText = `Ele chega, luta contra seu medo e se aproxima com a maior cara de raiva que possa fazer. Parece que está preparado para dizer tantas coisas. Prática mentalmente seu discurso, memoriza as palavras como uma poesia. Pressiona seu peito e vá até eles. E pensa em todas as coisas que algumas vez o lastimaram. A dor que sentiu, as inseguranças, a ansiedade. Qualquer coisa é suficiente. Ele precisa, precisa muito deixar fora esse seu lado sensível e ser o que é, um Draconato! Alguém disposto à batalha.`
                botonSeg.style.display = 'flex';})
                res = Number(res - 1)
            }      
        }
            
    })

/* */

var botonEsc = document.getElementById("boton03");


function escolher(){
    
    res = prompt(`Qual é a melhor alternativa a escolher?\n 1 Parar \n 2 Continuar \n 3 Não Fazer nada`)

    var nVidas = 3;

    while(nVidas >= 1){
        
        if(res.indexOf("1") >= 0){
            alert(`Sempre quis isso… obrigado`)
            window.location.href = "../../Nivel4/html/004.html"
            break;
        }else{
            alert(`Sinto que posso fazer muito mais que isso \n Agora você tem ${nVidas} vidas`)
            res = prompt(`Qual é a melhor alternativa a escolher?\n 1 Parar \n 2 Continuar \n 3 Não Fazer nada`)
            nVidas--;
        }}

    if(nVidas == 0){
        window.location.href = "gameover.html"
    }
}
