const criarMatriz = (linhas, colunas) => {
    let matriz = new Array(linhas);

    for (let indice = 0; indice < matriz.length; indice++) {
        matriz[indice] = new Array(colunas);
    }

    for (let linha = 0; linha < linhas; linha++) {
        for (let coluna = 0; coluna < colunas; coluna++) {
            matriz[linha][coluna] = Math.round(Math.random() * 100);
        }
    }

    return matriz;
}

console.log(criarMatriz(5, 4));