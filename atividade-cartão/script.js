const botao = document.querySelector("#btnMudar")
const botaoReverter = document.querySelector("#btnReverter")
const botaoSurpresa = document.querySelector("#imgSurpresa")
const card = document.querySelector("#card")
const texto = document.querySelector("#texto")
const titulo = document.querySelector("#titulo")
const descricao = document.querySelector("#descricao")

botao.addEventListener("click", function() {
botao.style.backgroundColor = "red";
botao.style.display = "none";

card.style.backgroundColor = "#333533";

texto.style.color = "white";
texto.innerHTML = "Funcionou, o card mudou de cor e o botão sumiu!";

titulo.innerText = "Card Alterado com sucesso!";
titulo.style.color = "white";
descricao.style.display = "none";

botaoReverter.style.display = "block";
botaoSurpresa.style.display = "block";

document.body.style.backgroundImage = "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNl2lY9lH-2b3zjq-rHOPJMJGTS3OaBphr3yz-ot3To9-1Fa07y9CC968&s=10')";
document.body.style.backgroundRepeat = "no-repeat";
document.body.style.backgroundSize = "cover";   

document.body.style.backgroundSize = "cover";
document.body.style.backgroundPosition = "center";
})

botaoReverter.addEventListener("click", function() {
botao.style.backgroundColor = "#007bff";
botao.style.display = "block";

card.style.backgroundColor = "#f8f9fa";

texto.style.color = "black";
titulo.style.color = "black";
descricao.style.color = "black";

botaoReverter.style.display = "none";

document.body.style.background = "linear-gradient(to right, #f8f9fa, #e9ecef)";
});

botaoSurpresa.addEventListener("click", function() {
    
document.body.style.backgroundImage = "url('https://i.pinimg.com/736x/77/c1/33/77c13333446751de8bb1d8d352661ee4.jpg')";
botao.style.backgroundColor = "purple";
botao.style.display = "none";

botaoReverter.style.display = "none";
botaoSurpresa.style.display = "none";

texto.style.display = "none";
descricao.style.display = "none";
titulo.innerText = "hmmm bolo de mulangu";
});