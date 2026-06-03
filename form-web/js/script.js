/*
 Criando Variáveis
*/ 

const nome = document.querySelector("#nome");
const button = document.querySelector("button");
const lista = document.querySelector(".lista");

/*
    criando função 
*/

button.addEventListener("click", (event) => {
    event.preventDefault();
    const inputValue = nome.value;
    const templateHTML = `<li>${inputValue}</li>`;


    // incluir itens no HTML
    lista.innerHTML = templateHTML + lista.innerHTML;
    // limpar o campo de input
    nome.value = "";
});