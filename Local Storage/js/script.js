function salvarNome() {
    let nome = document.getElementById("nome").value;
     localStorage.setItem("nome", nome);
     document.getElementById("mensagem").textContent = "Nome salvo com sucesso!";
}

function recuperarNome() {
    let nome = localStorage.getItem("nome");
    if (nome) {
        document.getElementById("mensagem").textContent = `Nome recuperado: ${nome}`;
    } else {
        document.getElementById("mensagem").textContent = "Nenhum nome salvo ainda!";
    }
}