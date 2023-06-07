// Selecionando elementos
let campoTarefa = document.querySelector("#campo-tarefa");
let botaoAdicionar = document.querySelector("#botao-adicionar");
let listaTarefas = document.querySelector("#lista-tarefas");

// botaoAdicionar.addEventListener("click", function() {
//     listaTarefas.innerHTML += `<li class="tarefa">${campoTarefa.value}<button class="botao-remover">Remover</button></li>`;
//     campoTarefa.value = null;
// });

// Adicionando o evento de clique no botão Adicinar
botaoAdicionar.addEventListener("click", adicionarTarefa);
campoTarefa.addEventListener("keyup", function(enter) {
    if (enter.key === "Enter") {
        adicionarTarefa();
    }
})

// Criando e adicionando elementos
function adicionarTarefa() {
    // Pegar o valor do campo de texto
    let nomeTarefa = campoTarefa.value;
    let aviso = document.getElementById("avisoSemTexto");

    if (nomeTarefa != "") {
        aviso.innerText = "";
        // Remove o texto no input
        campoTarefa.value = "";
        // Criando um elemento li
        let novaTarefa = document.createElement("li");
        // Definindo o contéudo do elemento li
        novaTarefa.innerText = nomeTarefa;
        // Adicionando a classe tarefa ao li
        novaTarefa.classList.toggle("tarefa");
        // Adicionar o item da lista ao final da lista
        listaTarefas.appendChild(novaTarefa);
        //Adicionar um ouvinte ao item da lista
        novaTarefa.addEventListener("click", function () {
            // Quando o item da lista é clicado, adicionamos a classe concluida
            novaTarefa.classList.toggle("concluida");
        });

        // Removendo elementos
        // Criar botão excluir
        let botaoExcluir = document.createElement("button");

        // Definir o texto do botão excluir
        botaoExcluir.innerText = "Remover";

        // Adicionar o botão excluir
        novaTarefa.appendChild(botaoExcluir);

        // Adicionar a classe botaoRemover ao button
        botaoExcluir.classList.toggle("botaoRemover");

        // Adicionar um ouvinte ao botão excluir
        botaoExcluir.addEventListener("click", function () {
            listaTarefas.removeChild(novaTarefa);
        });
    } else {
        aviso.innerText = "Por favor, coloque um texto!";
    }
}