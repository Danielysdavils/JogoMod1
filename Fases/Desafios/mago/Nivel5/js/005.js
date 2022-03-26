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

            texto.innerText = `Soltou tudo o que tinha em suas mãos e concentrou seu poder em um feitiço só, em um de restauração. E o aplicou no golem. Todo mundo ficou em impasse. ‘’ Por que ela estava fazendo isso?’’, ‘’Traidora!’’, gritaram alguns. Ela só olhou para o golem e sorriu. Satisfeita com o que tinha feito e disposta a aceitar as consequências. 
            Mas o que ela não esperava, era que o golem se inclinasse ante ela permitindo que se subisse em suas costas. O que deveria fazer? `
            botonSeg.style.display = 'none';
            res = Number(suich - 1)

            if(res === 2){
                botonRet.addEventListener("mouseover", function(){
                texto.innerText = `Ela podia ser determinada para tornar-se qualquer coisa, mas não como seus colegas, seres sem coração e um pouquinho de empatia. Ela apesar de tudo tinha princípios, tinha valores, e sabia perfeitamente quais eram seus limites. Também reconhecia que permitiu que muitas pessoas não os respeitasse e isso, no fundo, causava dor em seu peito, por mais que ela desse a impressão contrária. Ela parou, olhou para o golem, para a plateia inteira, para os outros concorrentes e para os organizadores, e foi nesse momento, que percebeu que ela tinha mudado. Qual era realmente seu objetivo? Que significava? Quem era ela afinal de contas?`
                botonSeg.style.display = 'flex';})
                res = Number(res - 1)
            }      
        }
            
    })

/* */

var botonEsc = document.getElementById("boton03");


function escolher(){
    
    res = prompt(`Qual é a melhor alternativa a escolher?\n 1 Negar a proposta \n 2 Fugir sozinha \n 3 Aceitar a proposta`)

    var nVidas = 3;

    while(nVidas >= 1){
        
        if(res.indexOf("3") >= 0){
            alert(`Adeus todo mundo!!`)
            window.location.href = "../../Nivel6/html/006.html"
            break;
        }else{
            alert(`Não acho que possa fazer isso! \n Agora você tem ${nVidas} vidas`)
            res = prompt(`Qual é a melhor alternativa a escolher?\n 1 Negar a proposta \n 2 Fugir sozinha \n 3 Aceitar a proposta`)
            nVidas--;
        }}

    if(nVidas == 0){
        window.location.href = "gameover.html"
    }
}
