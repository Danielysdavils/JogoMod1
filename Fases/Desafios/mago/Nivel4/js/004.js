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

            texto.innerText = `Ele nem tinha intenção de brigar. Só estava com dor, muita dor. Então, o que deveria fazer? `
            botonSeg.style.display = 'none';
            res = Number(suich - 1)

            if(res === 2){
                botonRet.addEventListener("mouseover", function(){
                texto.innerText = `Ela tenta pensar em como merece vencer e receber aprovação, a aprovação dela mesma. Só que, ao se acercar,  percebe que o golem definitivamente não está bem. Poderia continuar e vencer tão facilmente. Receber o prêmio e a liderança. Mas teria a capacidade de fazer isso? O golem precisava de ajuda, não podia continuar assim. `
                botonSeg.style.display = 'flex';})
                res = Number(res - 1)
            }      
        }
            
    })

/* */

var botonEsc = document.getElementById("boton03");


function escolher(){
    
    res = prompt(`Qual é a melhor alternativa a escolher?\n 1 Não ajudar o golem \n 2 Ajudar o golem \n 3 Sair da batalha`)

    var nVidas = 3;

    while(nVidas >= 1){
        
        if(res.indexOf("2") >= 0){
            alert(`Não sei o que estou fazendo!!!!`)
            window.location.href = "../../Nivel5/html/005.html"
            break;
        }else{
            alert(`Poderei dormir nas noites com isso? \n Agora você tem ${nVidas} vidas`)
            res = prompt(`Qual é a melhor alternativa a escolher?\n 1 Não ajudar o golem \n 2 Ajudar o golem \n 3 Sair da batalha`)
            nVidas--;
        }}

    if(nVidas == 0){
        window.location.href = "gameover.html"
    }
}
