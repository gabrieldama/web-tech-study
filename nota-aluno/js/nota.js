// Variaveis
const inputNota = document.getElementById("nota");
const resultado = document.getElementById("resultado");

function resultadoNotaClick(event) {
    event.preventDefault();
    const notaValue = inputNota.value;
    // Validação
    if (notaValue == "") {
        alert("Por favor, digite a nota do aluno.");
        return false;
    }

    if (notaValue < 0 || notaValue > 10) {
        alert("Por favor, digite uma nota válida entre 0 e 10.");
        return false;
    }
// Logica
    if (notaValue >= 6) {
    alert("Aluno aprovado");
} else {
    alert("Aluno reprovado");
}
}





