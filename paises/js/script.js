const paises = [
    "Brasil",
    "Argentina",
    "Uruguai",
    "Paraguai",
    "Chile",
    "Colômbia",
    "Peru",
    "Japão"
];

function mostrarPaises() {
    const listaPaises = document.getElementById("listaPaises");
    listaPaises.innerHTML = "";

    for (let i = 0; i < paises.length; i++) {
        listaPaises.innerHTML += "<li>" + paises[i] + "</li>";
    }
}

const btnMostrarPaises = document.getElementById("btnMostrarPaises");
btnMostrarPaises.addEventListener("click", mostrarPaises);