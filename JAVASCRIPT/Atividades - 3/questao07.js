let valorProduto = 20;
let valorVenda;

if (valorProduto < 20) {
    valorVenda = valorProduto * 1.45;
} else {
    valorVenda = valorProduto * 1.3;
}

console.log(`Valor de venda: R$${valorVenda.toFixed(2)}`);