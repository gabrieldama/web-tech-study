function minhaFuncao() {
    document.write("Minha função");
}

function pularLinha() {
    document.write("<br><br>");
}

function mostrarNome(nome) {
    pularLinha();
    document.write(nome);
    pularLinha();
}

minhaFuncao();
pularLinha();
minhaFuncao();
mostrarNome("Gabriel");
mostrarNome("Maria");