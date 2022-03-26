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

            texto.innerText = `[A] Neste momento, posso construir um aparelho que derreta o gelo. Com a mesma tecnologia que utilizei para quebrar as fronteiras da realidade. Posso ficar escondida aqui e terminá-lo, se os golens vão até o humano posso ganhar tempo e terminar… mas..; sim, também posso ir até lá e tentar recolher essa coisa, montá-la nas minhas costas e sair correndo... Qual é a melhor opção?`
            botonSeg.style.display = 'none';
            res = Number(suich - 1)

            if(res === 2){
                botonRet.addEventListener("mouseover", function(){
                texto.innerText = `Correm pelas montanhas, tentando alcançá-los, eles ainda não detectam que vocês estão tão perto. Eles são do tamanho de um castelo, parece impossível que consigam derrotá-los. Há gelo por todas partes, e aquele fazendeiro corre assustado tremendo de medo. Porque não se moveu tempo atrás? Ninguém sabe. Tenta escapar pelas profundezas das montanhas, passando por gramados congelados que, ao final, fazem com que ele tropece e caia, derramando seu pouco trigo, e deixando-o à vista dos golem furiosos. 
                [A] Nem brincando! Não posso pretender colocar a missão em risco só por salvar aquele ser esquisito de bigode! 
                [A] Não preciso…! …. 
                [A] Preciso?`
                botonSeg.style.display = 'flex';})
                res = Number(res - 1)
            }      
        }
            
    })

/* */

var botonEsc = document.getElementById("boton03");


function escolher(){
    
    res = prompt(`Qual é a melhor alternativa a escolher?\n 1 Rescatar o senhor \n 2 Continuar trabalhando no aparelho \n 3 Atacá-los diretamente`)

    var nVidas = 3;

    while(nVidas >= 1){
        
        if(res.indexOf("1") >= 0){
            alert(`Não posso acreditar vou fazer isso! Não posso acreditar que eu quis fazer isso!`)
            window.location.href = "../../Nivel4/html/004.html"
            break;
        }else{
            alert(`Já disse que confie nas minhas capacidades! hahaha ….. \n Tem um golem detrás de mim certo? Sim… já vi ele. \n Agora você tem ${nVidas} vidas `)
            res = prompt(`Qual é a melhor alternativa a escolher?\n 1 Rescatar o senhor \n 2 Continuar trabalhando no aparelho \n 3 Atacá-los diretamente`)
            nVidas--;
        }}

    if(nVidas == 0){
        window.location.href = "gameover.html"
    }
}
