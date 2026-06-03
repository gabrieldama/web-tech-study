/*
 Criando Variáveis
*/ 

const nome = document.querySelector("#nome");
const email = document.querySelector("#email");
const telefone = document.querySelector("#telefone");
const button = document.querySelector("button");
const lista = document.querySelector(".lista");

/*
    criando função 
*/

button.addEventListener("click", (event) => {
    event.preventDefault();
    const inputValue = nome.value + " - " + email.value + " - " + telefone.value;
    const templateHTML = `<li>${inputValue}</li>`;


    // incluir itens no HTML
    lista.innerHTML = templateHTML + lista.innerHTML;
    // limpar o campo de input
    nome.value = "";
    email.value = "";
    telefone.value = "";
});