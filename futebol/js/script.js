const jogadores = [
    "Neymar",
    "Vinicius Júnior",
    "Rodrygo",
    "Endrick",
    "Casemiro",
    "Alisson",
    "Marquinhos",
    "Gabriel Magalhães",
    "Bruno Guimarães",
    "Raphinha"
];

function listarJogadores() {
    let lista = document.getElementById("listaJogadores");
    lista.innerHTML = "";

    for (let i = 0; i < jogadores.length; i++) {
        lista.innerHTML += "<li>" + jogadores[i] + "</li>";
    }
}

const btnMostrar = document.getElementById("btnMostrar");
btnMostrar.addEventListener("click", listarJogadores);