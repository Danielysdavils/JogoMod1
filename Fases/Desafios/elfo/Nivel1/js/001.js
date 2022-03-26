var botonSeg = document.getElementById("boton02");
var botonRet = document.getElementById("boton01");

var texto = document.getElementById("txt01");
var suich = 0

    if(suich === 0){
    function atras(){
        window.location.href = "../../../../../Fases/selecaoPer/html/002.html"
        }
    }

    botonSeg.addEventListener("click", function(){
        var suich = 3
        if(suich === 3){

            texto.innerText = `Ele conhece bem sua família, sabe que nunca se importaram pelos povos e nem pelo cargo que tinham, somente pelas consequências positivas que conseguiam com isso. De certa forma, ele era grato, mas ao mesmo tempo, não compreendia como deveria sentir-se a respeito. 
            Ele deveria começar a pesquisa conforme ordem de seus pais? ou melhor deixar o barco afundar?`
            botonSeg.style.display = 'none';
            res = Number(suich - 1)

            if(res === 2){
                botonRet.addEventListener("mouseover", function(){
                texto.innerText = `Nascido em uma família nobre, com padres de altos cargos. Desde criança teve o senso de responsabilidade por assumir tarefas que muitas vezes eram maiores para ele. Seus padres eram tão estritos e compulsivos por perfeição, que não é de estranhar se às vezes nosso personagem é muito frustrado com seus erros. 
                Certo dia, ele recebe uma carta de seu padre. Com o mandato de procurar uma solução para o presente problema da praga dos golens por todo Preourous e assim evitar que cheguem a Taldorem. Ele precisava encontrar a todo custo uma solução para esse conflito. Graças a que seu reino, por causa de péssimas decisões financeiras, se obtivesse o mérito dessa solução, ganharia novamente a adulação de seu povo. E com isso, novo sustento econômico. `
                botonSeg.style.display = 'flex';})
                res = Number(res - 1)
            }      
        }
            
    })

/* */

var botonEsc = document.getElementById("boton03");


function escolher(){
    
    res = prompt(`Qual é a melhor alternativa a escolher?\n Não seguir a ordem \n 2 Procurar emprego \n 3 Seguir a ordem`)

    var nVidas = 3;

    while(nVidas >= 1){
        
        if(res.indexOf("3") >= 0){
            alert(`Sim, com certeza é a melhor coisa a fazer`)
            window.location.href = "../../Nivel2/html/002.html"
            break;
        }else{
            alert(`Não posso fazer nenhuma dessas coisas!\n Agora você tem ${nVidas} vidas`)
            res = prompt(`Qual é a melhor alternativa a escolher?\n Não seguir a ordem \n 2 Procurar emprego \n 3 Seguir a ordem`)
            nVidas--;
        }}

    if(nVidas == 0){
        window.location.href = "gameover011.html"
    }
}
