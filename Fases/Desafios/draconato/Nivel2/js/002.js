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

            texto.innerText = `Ele tenta acercar-se mas com só ver as pessoas sente seu peito quase explodir em chamas “literalmente”. Ele precisa se aproximar, porém, tendo isso em consideração, qual é a melhor coisa a fazer? `
            botonSeg.style.display = 'none';
            res = Number(suich - 1)

            if(res === 2){
                botonRet.addEventListener("mouseover", function(){
                texto.innerText = `Draconato aceita o desafio. Sai de sua realidade e termina num planeta desértico que correspondia à alta concentração de energia, algo como formas de vida muito esquisitas. Logo depois de voar por algumas horas encontra uma vila humana e justo ali, um rastro dos seres que procuravam. Essas pessoas pareciam não ter a mínima ideia do que estava acontecendo, do perigo que tinham por debaixo de sua terra. Sua aparência era diferente da dos outros humanos. Suas casas eram feitas de um material muito fraco e pareciam estar…. cansadas.
                Draconato desce dos céus para aproximar-se da zona em perigo e imediatamente escuta o som estridente das pessoas gritando ao olharem para ele. 
               Ele imediatamente entra em pânico, só que mantendo seu perfil neutro e de “cheio de ódio". 
               `
                botonSeg.style.display = 'flex';})
                res = Number(res - 1)
            }      
        }
            
    })

/* */

var botonEsc = document.getElementById("boton03");


function escolher(){
    
    res = prompt(`Qual é a melhor alternativa a escolher?\n 1 lorem \n 2 lorem \n 3 lorem`)

    var nVidas = 3;

    while(nVidas >= 1){
        
        if(res.indexOf("1") >= 0){
            alert(`Sim, definitivamente é a melhor coisa a fazer! Eles me tratarão com seriedade e respeito.`)
            window.location.href = "../../Nivel3/html/003.html"
            break;
        }else{
            alert(`Ummm... acho que não é a melhor opção... será? ${nVidas}`)
            res = prompt(`Qual é a melhor alternativa a escolher?\n 1 Medo é a solução \n 2 A calma é a solução \n 3 Não ter paciencia é a melhor solução`)
            nVidas--;
        }}

    if(nVidas == 0){
        window.location.href = "gameover02.html"
    }
}
