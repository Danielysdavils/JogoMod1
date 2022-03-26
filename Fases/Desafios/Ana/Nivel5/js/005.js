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

            texto.innerText = `[A] Muito simples, vamos criar uma armadilha para os golems e ganhar tempo para construir algo útil. Finalmente, atacamos com nosso aparelho. Para assim derrotá-los.  Finalmente podemos guardar o líquido que está dentro de seus corpos e plantar árvores por todo canto das duas realidades e consertar toda esta confusão.
            Posso contar com você?`
            botonSeg.style.display = 'none';
            res = Number(suich - 1)

            if(res === 2){
                botonRet.addEventListener("mouseover", function(){
                texto.innerText = `[A] Não sou muito rápida, por isso, não é uma boa ideia só correr aleatoriamente. Por sorte, tenho um plano. Vamos fazer com que eles não consigam fazer mais nada. Os derrotarei, iré a casa e falarei com firmeza que fui eu. A versão que quero de mim mesma. Aquela que, se consegue vencer golens de cinco hectares, pode contra a opinião destrutiva de sua colônia. Agora, qual é a melhor coisa a fazer?`
                botonSeg.style.display = 'flex';})
                res = Number(res - 1)
            }      
        }
            
    })

/* */

var botonEsc = document.getElementById("boton03");


function escolher(){
    
    res = prompt(`Qual é a melhor alternativa a escolher?\n 1 Atrapálos entre as árvores \n 2 Esperar até o sol fazer seu trabalho \n 3 Criar armadilha com os recursos da netureza`)

    var nVidas = 3;

    while(nVidas >= 1){
        
        if(res.indexOf("3") >= 0){
            alert(`Assim mesmo, a final de contas este planeta não é tão inutil assim! Seus recursos naturais podem ser usados como uma perfeita armadilha`)
            window.location.href = "../../Nivel6/html/006.html"
            break;
        }else{
            alert(`Poxa essa não deu! Agora você tem ${nVidas} vidas `)
            res = prompt(`Qual é a melhor alternativa a escolher?\n 1 Atrapálos entre as árvores \n 2 Esperar até o sol fazer seu trabalho \n 3 Criar armadilha com os recursos da netureza`)
            nVidas--;
        }}

    if(nVidas == 0){
        window.location.href = "gameover.html"
    }
}
