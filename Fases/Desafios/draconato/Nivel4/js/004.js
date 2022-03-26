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

            texto.innerText = `Nesse instante, a mesma criança que tinha tanto pavor, se aproximou e sorriu para ele, compreendendo a situação, mas ele disse “não é o melhor modo, e isso não está bem mas, entendo quão difícil é porém, estamos dispostos a entenderte”. Por favor, diga-nos qual é a melhor coisa a fazer?
        `
            botonSeg.style.display = 'none';
            res = Number(suich - 1)

            if(res === 2){
                botonRet.addEventListener("mouseover", function(){
                texto.innerText = `Ele simplesmente parou. Se ajoelhou e pediu desculpas por causar-lhes medo. Foi a única coisa que disse, como podem imaginar, não era muito bom com as palavras. Com muito cuidado, tomando valentia, explicou que tinha algum ser estranho debaixo da aldeia e precisava fazer algo. Não queria no começo fazer dano. Mas, não se sabe com exatidão qual é a melhor forma de se dirigir com pessoas. E isso sempre é uma barreira enorme. Que ele realmente não era uma pessoa disposta a lutar e destruir, ele simplesmente foi feito para isso.`
                botonSeg.style.display = 'flex';})
                res = Number(res - 1)
            }      
        }
            
    })

/* */

var botonEsc = document.getElementById("boton03");


function escolher(){
    
    res = prompt(`Qual é a melhor alternativa a escolher?\n 1 Não precisam fazer nada \n 2 Vocês que lutem \n 3 Procurar um lugar seguro`)

    var nVidas = 3;

    while(nVidas >= 1){
        
        if(res.indexOf("3") >= 0){
            alert(`Sem dúvida dará certo!`)
            window.location.href = "../../Nivel5/html/005.html"
            break;
        }else{
            alert(`Não acho que seja uma boa ideia \n Agora você tem ${nVidas} vidas `)
            res = prompt(`Qual é a melhor alternativa a escolher?\n 1 Não precisam fazer nada \n 2 Vocês que lutem \n 3 Procurar um lugar seguro`)
            nVidas--;
        }}

    if(nVidas == 0){
        window.location.href = "gameover.html"
    }
}
