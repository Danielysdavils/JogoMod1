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

            texto.innerText = `Fora disso, graças às pesquisas, encontraram vários fragmentos de cristais. Que diziam ser provenientes das fontes da realidade. Agora a pergunta era? Deveriam ir à terra para continuar pesquisando ou se aventurar dentro de “Omag” e entender a origem desses golens? `
            botonSeg.style.display = 'none';
            res = Number(suich - 1)

            if(res === 2){
                botonRet.addEventListener("mouseover", function(){
                texto.innerText = `Ele, como era de esperar, procurou os melhores pesquisadores. Utilizando a melhor de suas qualidades: a fala. Não há nada que não possa conseguir, tudo com a magia das palavras e a perfeita utilização delas. Porque não tinha dinheiro para pagar nada, precisava de uma solução e por sorte, ele tinha essa qualidade. 
                Alguns meses se passaram e com intenso trabalho descobriram um padrão no lugar onde os golens se escondiam. Sempre parecia que eles procuravam algo, que necessitavam algo. E conforme os últimos golens foram vencidos, maior quantidade deles se replicavam. Com um único foco, “Preoureus”. Que poderia haver dentro desse planeta que fosse tão importante? Talvez, esse era o objetivo, que acreditássemos que esse era o lugar importante?
            `
                botonSeg.style.display = 'flex';})
                res = Number(res - 1)
            }      
        }
            
    })

/* */

var botonEsc = document.getElementById("boton03");


function escolher(){
    
    res = prompt(`Qual é a melhor alternativa a escolher?\n 1 De longe \n 2 Preaourous \n 3 Omag`)
    var nVidas = 3;

    while(nVidas >= 1){
        
        if(res.indexOf("3") >= 0){
            alert(`Perfeito! Ali encontraremos maior informações`)
            window.location.href = "../../Nivel3/html/003.html"
            break;
        }else{
            alert(`Passaram varios meses e não conseguimos nada! \n Agora você tem ${nVidas}`)
            res = prompt(`Qual é a melhor alternativa a escolher?\n 1 De longe \n 2 Preaourous \n 3 Omag`)
            nVidas--;
        }}

    if(nVidas == 0){
        window.location.href = "gameover02.html"
    }
}
