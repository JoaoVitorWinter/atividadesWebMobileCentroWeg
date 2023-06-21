// Selecionando elementos
let campoTarefa = document.querySelector("#campo-tarefa");
let botaoAdicionar = document.querySelector("#botao-adicionar");
let listaTarefas = document.querySelector("#lista-tarefas");

let tarefasSalvas = JSON.parse(localStorage.getItem("tarefas")) || [];
let statusTarefasSalvas = JSON.parse(localStorage.getItem("status")) || [];

tarefasSalvas.forEach(adicionarTarefa);

for (let indice = 0; indice < statusTarefasSalvas.length; indice++) {
    if (statusTarefasSalvas[indice] == "1") {
        document.getElementsByClassName("tarefa")[indice].classList.toggle("concluida");
    }
}
// botaoAdicionar.addEventListener("click", function() {
//     listaTarefas.innerHTML += `<li class="tarefa">${campoTarefa.value}<button class="botao-remover">Remover</button></li>`;
//     campoTarefa.value = null;
// });

// Adicionando o evento de clique no botão Adicinar
botaoAdicionar.addEventListener("click", function () {
    if (campoTarefa.value != "") {
        tarefasSalvas.push(campoTarefa.value);
        statusTarefasSalvas.push("0");
    }
    adicionarTarefa(campoTarefa.value);
});
campoTarefa.addEventListener("keyup", function (enter) {
    if (enter.key === "Enter") {
        if (campoTarefa.value != "") {
            tarefasSalvas.push(campoTarefa.value);
            statusTarefasSalvas.push("0");
        }
        adicionarTarefa(campoTarefa.value);
    }
})

// Criando e adicionando elementos
function adicionarTarefa(nome) {
    // Pegar o valor do campo de texto
    let nomeTarefa = nome
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
            tarefasSalvas = [];
            for (let indice = 0; indice < document.getElementsByClassName("tarefa").length; indice++) {
                tarefasSalvas.push(document.getElementsByClassName("tarefa")[indice].textContent);
                tarefasSalvas[indice] = tarefasSalvas[indice].split("Remover")[0];

                if (document.getElementsByClassName("tarefa")[indice].style.backgroundColor = "#00ff00") {
                    statusTarefasSalvas.push("1");
                } else {
                    statusTarefasSalvas.push("0");
                }
                
            }
            localStorage.setItem("tarefas", JSON.stringify(tarefasSalvas));
            localStorage.setItem("status", JSON.stringify(statusTarefasSalvas));
        });

        localStorage.setItem("tarefas", JSON.stringify(tarefasSalvas));
        localStorage.setItem("status", JSON.stringify(statusTarefasSalvas));
    } else {
        aviso.innerText = "Por favor, coloque um texto!";
    }
}

let botaoToggle = document.getElementById("toggle");

document.body.className = localStorage.getItem("modo") || "modo-claro";

botaoToggle.addEventListener("click", function() {
    if (document.body.className === "modo-claro") {
        document.body.className = "modo-escuro";
    } else {
        document.body.className = "modo-claro";
    }

    localStorage.setItem("modo", document.body.className);
});