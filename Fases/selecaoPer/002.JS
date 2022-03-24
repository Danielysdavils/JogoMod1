
function escriba (elemento){ 

    var tituloArray = elemento.innerHTML.split(''); 

    elemento.innerHTML = '';
    
    tituloArray.forEach(function(letra, i){
       setTimeout(function(){
        elemento.innerHTML += letra;
       }, 75*i)
    }) 

}

var titulo = document.getElementById('titulo');
escriba(titulo)



/* */

var texto = document.getElementById("trocatxt");
var img = document.getElementById("trocaimg");
var fondo = document.querySelector("div.img")
var dados01 = document.querySelector("h2.datos01")
var dados02 = document.querySelector("h2.datos02")
var dados03 = document.querySelector("h2.datos03")


function verMag(){

    img.src = "../../midia/ImgPersonagens/hechicera.png"
    texto.innerText = "Hechicera"
    texto.style.color = "rgb(117, 24, 55)"
    fondo.style.backgroundColor = "rgba(231, 206, 207,0.9)"

}

function verDrag(){

    img.src = "../../midia/ImgPersonagens/draconato.png"
    texto.innerText = "Draconato"
    dados01.innerText = "Vida: 70%"
    dados02.innerText = "Poder: 80%"
    dados03.innerText = "Resistencia: 90%"
    texto.style.color = "rgb(20, 24, 55)"
    fondo.style.backgroundColor = "rgba(238, 163, 59,0.9)"
}

function verAna(){

    img.src = "../../midia/ImgPersonagens/ana.png"
    texto.innerText = "Anã"
    dados01.innerText = "Vida: 90%"
    dados02.innerText = "Poder: 85%"
    dados03.innerText = "Resistencia: 60%"
    texto.style.color = "#034076"
    fondo.style.backgroundColor = "rgba(243, 222, 127,0.9)"
}

function verElf(){

    img.src = "../../midia/ImgPersonagens/elf.png"
    texto.innerText = "Elfo"
    dados01.innerText = "Vida: 60%"
    dados02.innerText = "Poder: 90%"
    dados03.innerText = "Resistencia: 80%"
    texto.style.color = "white"
    fondo.style.backgroundColor = "rgba(9, 174, 111,0.9)"
}

/*  */

var boton = document.getElementById("siguiente")

function escolher(){
    
    var personaje = prompt("Escreva a letra correspondente ao personagem que deseja escolher! \n [a] Hechicera \n [b] Draconato \n [c]Anã \n [d]Elfo")

    var nVidas = 3;

    while(nVidas >= 1){
        if (personaje.indexOf("a") >= 0){
            var jogador = "Hechicera"
            alert(`Agora, começam novas aventuras com ${jogador}!`);
            window.location.href = ("http://127.0.0.1:5500/Fases/Desafios/mago/Nivel1/html/001.html")
            break;
        }else if (personaje.indexOf("b") >= 0){
            var jogador = "Draconato"
            alert(`Agora, começam novas aventuras com ${jogador}!`);
            window.location.href = ("http://127.0.0.1:5500/Fases/Desafios/draconato/Nivel1/html/001.html")
            break;
        }else if (personaje.indexOf("c") >= 0){
            var jogador = "Anã"
            alert(`Agora, começam novas aventuras com ${jogador}!`);
            window.location.href = ("http://127.0.0.1:5500/Fases/Desafios/Ana/Nivel1/html/001.html")
            break;
        }else if (personaje.indexOf("d") >= 0){
            var jogador = "Elfo"
            alert(`Agora, começam novas aventuras com ${jogador}!`);
            window.location.href = ("http://127.0.0.1:5500/Fases/Desafios/elfo/Nivel1/html/001.html")
            break;
        }
        alert(`digite un valor valido! \n Agora você tem: ${nVidas} vidas`)

        personaje = prompt("Escreva a letra correspondente ao personagem que deseja escolher! \n [a] Hechicera \n [b] Draconato \n [c]Anã \n [d]Elfo");
        nVidas--;
    
    }

}

