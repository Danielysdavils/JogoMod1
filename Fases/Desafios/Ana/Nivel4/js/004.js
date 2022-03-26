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

            texto.innerText = `[A] Não chore senhor, venho a salvá-lo! Venha pegue minha mão. Suba nas minhas costas que eu carrego o senhor.  Agora, precisamos encontrar um lugar seguro e construir o aparelho. Qual é a melhor coisa a fazer?`
            botonSeg.style.display = 'none';
            res = Number(suich - 1)

            if(res === 2){
                botonRet.addEventListener("mouseover", function(){
                texto.innerText = `Ela saiu correndo, lutando para chegar a tempo. Os golens imediatamente a observaram e começaram a atacá-la. Ela percebe que pela primeira vez, está fazendo algo que queria. Ela não tinha se oferecido à missão só porque era a melhor. Tinham mandado ela para mantê-la longe. E ela, afinal de contas, sabia disso, e não reclamou em nenhum momento. O que quería? Porque estava alí? Parecia que jamais iria contar para si mesma que, na verdade, estava com medo. Medo de que por não encaixar nas opiniões dos outros jamais iria ser alguém. Que sempre precisaría ter as respostas para cada pergunta. Que precisaria ser ela quem desse sempre o melhor. Que parecesse que não tinha falhas. 

                [A] Sim…, - sua voz se escuta agitada por correr -  é verdade. Jamás conseguí ser eu mesma. Por isso que, estou aquí. E parece mentira más, isto é diferente. Porque, ao fnial de contas, olhe para mim. Estou correndo, correndo para salvar alguém que não conheço. Mas realmente sinto que  eu que queria ser resgatada! Resgatada de mim mesma. `
                botonSeg.style.display = 'flex';})
                res = Number(res - 1)
            }      
        }
            
    })

/* */

var botonEsc = document.getElementById("boton03");


function escolher(){
    
    res = prompt(`Qual é a melhor alternativa a escolher?\n 1 Deixar o senhor \n 2 Esconder-se na água \n 3 Ser uma distração`)

    var nVidas = 3;

    while(nVidas >= 1){
        
        if(res.indexOf("3") >= 0){
            alert(`Parece a menos provável, mas já te falei, confía nas minhas capacidades!`)
            window.location.href = "../../Nivel5/html/005.html"
            break;
        }else{
            alert(`Poxa essa não deu! Agora você tem ${nVidas} vidas`)
            res = prompt(`Qual é a melhor alternativa a escolher?\n 1 Deixar o senhor \n 2 Esconder-se na água \n 3 Ser uma distração`)
            nVidas--;
        }}

    if(nVidas == 0){
        window.location.href = "gameover.html"
    }
}
