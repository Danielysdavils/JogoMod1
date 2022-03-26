var botonSeg = document.getElementById("boton02");
var botonRet = document.getElementById("boton01");

var texto = document.getElementById("txt01");
var suich = 0

    if(suich === 0){
    function atras(){
        window.location.href = "../../../../selecaoPer/html/002.html"
        }
    }

    botonSeg.addEventListener("click", function(){
        var suich = 3
        if(suich === 3){

            texto.innerText = `Não demorou muito para sobresalir por seu esforço. Era alguém com determinação no objetivo. Queria chegar ao topo, queria poder se tornar alguém que ela mesma admirasse. Assim, passaram os anos até que um evento especial se propagou por cada canto da colônia água. Esse evento mostraria quem seria capaz de se tornar o novo líder do exército de magia. Debería nossa determinada moça se inscrever no evento? 
            `
            botonSeg.style.display = 'none';
            res = Number(suich - 1)

            if(res === 2){
                botonRet.addEventListener("mouseover", function(){
                texto.innerText = `Esta moça não teve um início muito parecido com os outros guerreiros. Nasceu num lugar onde sua família não esteve muito presente, o que a deixou bem preparada para enfrentar se à vida sozinha. Quando tinha a idade suficiente, não duvidou em se inscrever no alto exército de nobres soldados com a bênção da magia. Ela não era a melhor da turma, e certamente seus colegas se aproveitavam disso, tratando-la como inferior, discriminando suas origens e fazendo-a sentir como se fosse menos. Podia ela reclamar, chorar ou se sentir mal, mas ela simplesmente nunca falou nada. Não se incomodava com nada. Ela só seguiu em frente.
                `
                botonSeg.style.display = 'flex';})
                res = Number(res - 1)
            }      
        }
            
    })

/* */

var botonEsc = document.getElementById("boton03");


function escolher(){
    
    res = prompt(`Qual é a melhor alternativa a escolher?\n Lutar \n 2 Melhor não \n 3 Não tenho certeza`)
    var nVidas = 3;

    while(nVidas >= 1){
        
        if(res.indexOf("1") >= 0){
            alert(`Exatamente, sei que consigo… né?  `)
            window.location.href = "../../Nivel2/html/002.html"
            break;
        }else{
            alert(`Se não luto como vou conseguir meus sonos? \n Agora você tem ${nVidas} vidas`)
            res = prompt(`Qual é a melhor alternativa a escolher?\n Lutar \n 2 Melhor não \n 3 Não tenho certeza`)
            nVidas--;
        }}

    if(nVidas == 0){
        window.location.href = "gameover011.html"
    }
}
