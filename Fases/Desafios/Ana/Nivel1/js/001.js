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

            texto.innerText = `[B] Chega de elogios sobre mim! De agora em diante, você terá que me escutar! E me conhecer realmente! Vamos fazer este trabalho simples, rápido e perfeito, ok? Não tenho tempo a perder! Nosso primeiro desafio é tentar sair desta dimensão para chegar a Preaureus. Alí é onde a raça humana se encontra. Eles são tão fracos em comparação nossa! hahaha. Por sorte sua, eu tenho um plano, graças a minhas habilidades mentais e mecânicas, posso construir qualquer aparelho que você imaginar. Porém, escolha com cuidado. Qual é o melhor caminho para prosseguir? `
            botonSeg.style.display = 'none';
            res = Number(suich - 1)

            if(res === 2){
                botonRet.addEventListener("mouseover", function(){
                texto.innerText = `[A] Seres inteligentes nascem inteligentes ou se tornam inteligentes? É uma séria questão. Mas para o povo anão nem tanto! Eles irão pesquisar, comprovar, processar, refutar, corrigir e divulgar a resposta de mil maneiras distintas em questão de minutos! Para este povo não existe maior diversão que a intriga de uma nova questão, de um novo desafio desconhecido, que do assombro pelas perguntas complexas sem direção! Suas habilidades de absorção de conteúdos sem dúvida iria te assombrar, ou talvez a sua agilidade na construção de planos detalhados para grandes projetos novedosos, e sem falar de sua habilidade com ferramentas. Desde o início dos tempos, foram em segredo os edificadores da ordem social, do desenvolvimento tecnológico, financeiro, medicinal entre muitas outras coisas. Colônias sobreviveram a terríveis pragas graças às pesquisas trabalhadas dentro de estas mentes brilhantes. Mas, nem tudo na vida é perfeito. Nem para quem parece ter todas as ferramentas ao seu alcance. Esta colônia é,surpreendentemente, roubada e injustiçada. 
                Por quê? Não são tão inteligentes como para procurar uma solução? Bom, essa é a única questão que não é debatida; a única coisa que desejam apagar de suas memórias, mas que se tornou parte de... 
                `
                botonSeg.style.display = 'flex';})
                res = Number(res - 1)
            }      
        }
            
    })

/* */

var botonEsc = document.getElementById("boton03");


function escolher(){
    
    res = prompt(`Qual é a melhor alternativa a escolher?\n 1 Construir  \n 2 Pedir ajuda \n 3 Fujir com os cristais`)

    var nVidas = 3;

    while(nVidas >= 1){
        
        if(res.indexOf("2") >= 0){
            alert(`*Fico até surpresa que você entendesse que essa era a melhor opção! Pedir ajuda? Por favor! Eu não faço esse tipo de coisa. Meu cérebro tem a suficiente quantidade de neurônios para produzir e idealizar a resposta correta!`)
            window.location.href = "../../Nivel2/html/002.html"
            break;
        }else{
            alert(`Não vou fazer isso! Quem você acha que eu sou?? \n Agora você tem ${nVidas} vidas!`)
            res = prompt(`Qual é a melhor alternativa a escolher?\n 1 Construir  \n 2 Pedir ajuda \n 3 Fujir com os cristais`)
            nVidas--;
        }}

    if(nVidas == 0){
        window.location.href = "gameover011.html"
    }
}
