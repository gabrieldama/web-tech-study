// Variaveis
const inputNota = document.getElementById("nota");
const resultado = document.getElementById("resultado");
const message = document.getElementById("message");

function resultadoNotaClick(event) {
    event.preventDefault();
    const notaValue = inputNota.value;
    // Validação
    if (notaValue == "") {
        message.style.display = "block";
    } else {
        message.style.display = "none";

    if (notaValue < 0 || notaValue > 10) {
        alert("Por favor, digite uma nota válida entre 0 e 10.");
        return;
    }
// Logica
    if (notaValue >= 6) {
    resultado.innerHTML = "Aluno aprovado";
} else {
    resultado.innerHTML = "Aluno reprovado";
}

inputNota.value = "";
    }
}




