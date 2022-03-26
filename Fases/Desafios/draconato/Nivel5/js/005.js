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

            texto.innerText = `Além do fato deles ficarem sem um lugar para morar, graças a que essa ameaça representa um grande risco, e era inevitável não destruí-la sem destruir também todas as casas que ali estavam.`
            botonSeg.style.display = 'none';
            res = Number(suich - 1)

            if(res === 2){
                botonRet.addEventListener("mouseover", function(){
                texto.innerText = `Com a ajuda da aldeia conseguiram sacar todo o mundo e deixar um espaço aberto para completar a missão, fora de risco. O que permitiu encontrar o responsável do problema : um golem de fogo por debaixo da areia. Resolver isso, seria complexo. Precisam procuram uma solução que evite a maior quantidade de riscos para as pessoas inocentes ao redor. O que poderiam fazer?`
                botonSeg.style.display = 'flex';})
                res = Number(res - 1)
            }      
        }
            
    })

/* */

var botonEsc = document.getElementById("boton03");


function escolher(){
    
    res = prompt(`Qual é a melhor alternativa a escolher?\n 1 Lutar \n 2 Barreira de vidro \n 3 Acreditar`)

    var nVidas = 3;

    while(nVidas >= 1){
        
        if(res.indexOf("2") >= 0){
            alert(`Boa ideia!`)
            window.location.href = "../../Nivel6/html/006.html"
            break;
        }else{
            alert(` Não acho que seja uma boa opção! \n Agora você tem ${nVidas} vidas`)
            res = prompt(`Qual é a melhor alternativa a escolher?\n 1 Lutar \n 2 Barreira de vidro \n 3 Acreditar`)
            nVidas--;
        }}

    if(nVidas == 0){
        window.location.href = "gameover.html"
    }
}
