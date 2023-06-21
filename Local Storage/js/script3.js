let listaCompras = document.getElementById("lista-compras");
let botaoAdicionar = document.getElementById("adicionar-btn");
let inputItem = document.getElementById("item-input");

let itensSalvos = JSON.parse(localStorage.getItem("itens")) || [];
itensSalvos.forEach(adicionarItemNaLista);

botaoAdicionar.addEventListener("click", function() {
    let nomeItem = inputItem.value;
    adicionarItemNaLista(nomeItem);

    itensSalvos.push(nomeItem);
    localStorage.setItem("itens", JSON.stringify(itensSalvos));
    inputItem.value = "";
});

function adicionarItemNaLista(nomeItem) {
    let itemLista = document.createElement("li");
    itemLista.innerText = nomeItem;
    listaCompras.appendChild(itemLista);
}