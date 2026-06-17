const campo = document.querySelector("#campo")
const salvarBtn = document.querySelector("#salvar")

// Adicionar envento clique no botão salvar
salvarBtn.addEventListener("click", function(event) {
    event.preventDefault()
    const valor = campo.value
    
    if (valor.trim() === "") {
        alert("O valor não pode ser nulo")
        return
    }

    // Salvar no localstorage
    const chave = `valorSalvo_${Date.now()}`;
    localStorage.setItem(chave, valor)

    // Limpar campo após salvar
    campo.value = ""
})