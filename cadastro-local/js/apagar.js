const apagarBtn = document.querySelector("#apagar")

apagarBtn.addEventListener("click", function() {
    // Limpa todos os valores no localstorage
    localStorage.clear()

    // Limpa lista da interface
    listaValores.innerHTML = ""
})