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

            texto.innerText = `Nesse instante parecia que o tempo tinha parado, que tudo tinha desaparecido por completo. Porque no mínimo segundo em que os cristais tocaram o chão uma enorme fumaça saiu pelos céus. E nosso personagem a ponto de morrer, o último que enxergou foi um enorme golem a sua frente. Indo em direção aos cristais.
            O que deveria fazer?`
            botonSeg.style.display = 'none';
            res = Number(suich - 1)

            if(res === 2){
                botonRet.addEventListener("mouseover", function(){
                texto.innerText = `Assim eles viajaram até o interior de Omag “terra do desconhecido". Precisavam entender o porquê de toda essa confusão. Se depararam  com  uma barreira quebrantada, e parte de sua superfície destruída. Não dava para observar de longe, precisavam de se aventurar por completo. 
                Passaram por muitos longos espaços vazios de terra que parecia morta, como se nada tivesse acontecido ali por milênios. Dias se passaram e parecia que jamais encontrariam nada, que tudo foi parte de uma ilusão. Até que uma forte pressão se sentiu no espaço. Evitando que eles conseguissem respirar. Dessa forma, caíram no chão deixando que os cristais entrem em contato com o espaço.`
                botonSeg.style.display = 'flex';})
                res = Number(res - 1)
            }      
        }
            
    })

/* */

var botonEsc = document.getElementById("boton03");


function escolher(){
    
    res = prompt(`Qual é a melhor alternativa a escolher?\n Não fazer nada \n 2 Tentar evitar \n 3 Dizer Adeus`)
    var nVidas = 3;

    while(nVidas >= 1){
        
        if(res.indexOf("1") >= 0){
            alert(`Não sei se é o melhor mas é o que da no momento!`)
            window.location.href = "../../Nivel4/html/004.html"
            break;
        }else{
            alert(`Não parece uma boa ideia! \n Agora você tem ${nVidas} vidas `)
            res = prompt(`Qual é a melhor alternativa a escolher?\n Não fazer nada \n 2 Tentar evitar \n 3 Dizer Adeus)
            nVidas--;
        }}

    if(nVidas == 0){
        window.location.href = "gameover.html"
    }
}
