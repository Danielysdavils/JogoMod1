var texto = document.getElementById("trocatxt");
var img = document.getElementById("trocaimg");
var fondo = document.querySelector("div.img")

function verMag(){

    img.src = "../../midia/ImgPersonagens/hechicera.png"
    texto.innerText = "Hechicera"
    fondo.style.backgroundColor = "green"

}

function verDrag(){

    img.src = "../../midia/ImgPersonagens/draconato.png"
    texto.innerText = "Draconato"
    fondo.style.backgroundColor = "white"
}

function verAna(){

    img.src = "../../midia/ImgPersonagens/ana.png"
    texto.innerText = "Aña"
    fondo.style.backgroundColor = "Yellow"
}

function verElf(){

    img.src = "../../midia/ImgPersonagens/elf.png"
    texto.innerText = "Elfo"
    fondo.style.backgroundColor = "black"
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

