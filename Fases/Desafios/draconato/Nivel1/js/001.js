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

            texto.innerText = `Dessa forma, Draconato se encontra disposto a sair de sua realidade para empreender uma viagem de possível morte, num lugar habitado por seres, segundo o líder da colônia fogo, bem fracos. Draconato precisa localizar a ameaça que chegou a Preourius e eliminá-la. Assim, estabelecendo normalidade nas fontes da realidade. Só que tem um pequeno problema…, por fora desse perfil sério e tenebroso se encontra a alma de um ser muito sensível e tímido. Que neste momento se debate internamente sobre, se seria uma boa ideia ser ele quem faça esse trabalho. Qual é a melhor coisa a fazer?`
            botonSeg.style.display = 'none';
            res = Number(suich - 1)

            if(res === 2){
                botonRet.addEventListener("mouseover", function(){
                texto.innerText = `Colônia de fogo, lugar onde os maiores guerreiros se formam. O nome da colônia provém dos muitos vulcões que ali se encontram;  além disso, é rica em ferros e minerais. 
                Esperado seria que, qualquer um que se considere parte deste povo, tenha um espírito forte, afável e imponente. Sem excitações.  Claro, esses são sempre os pensamentos dos de fora. 
                Seus antepassados sem piedade criaram-lhes, fora de sua terra, uma imagem de seres sem coração; destemidos e ferozes. Estavam certos? O rumor só se aplicava aos altos chefes da colônia - tiranos com sede de poder e reconhecimento. Como poderiam viver em paz uns com os outros? e, no entanto, proibidos de possuir qualquer outra terra que não fosse a sua? sem aproveitar  os recursos de povos fracos em comparação a sua grandeza?A ideia os aterrorizava e, é claro, não conseguiam permanecer assim! 
                Más, a diferença deles. Nosso personagem escolheu se candidatar para provar aos outros de que teria firmeza o suficiente para enfrentar um desafio maior.`
                botonSeg.style.display = 'flex';})
                res = Number(res - 1)
            }      
        }
            
    })

/* */

var botonEsc = document.getElementById("boton03");


function escolher(){
    
    res = prompt(`Qual é a melhor alternativa a escolher?\n 1 Recomendar outro(a) Draconato(a) \n 2 Fingir degurança e aceitar \n 3 Mentir`)

    var nVidas = 3;

    while(nVidas >= 1){
        
        if(res.indexOf("2") >= 0){
            alert(`Mentir não é uma das melhores coisas a se fazer mas, não é uma boa ideia falar sobre suas inseguranças com o jefe da colonia, certo?!`)
            window.location.href = "../../Nivel2/html/002.html"
            break;
        }else{
            alert(`Parece uma boa ideia mas, é isso que você realmente quer? \n Agora você tem ${nVidas} vidas`)
            res = prompt(`Qual é a melhor alternativa a escolher?\n Recomendar outro(a) Draconato(a) \n 2 Fingir degurança e aceitar \n 3 Mentir`)
            nVidas--;
        }}

    if(nVidas == 0){
        window.location.href = "gameover011.html"
    }
}
