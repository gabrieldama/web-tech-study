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
    console.log(nome.value);
});