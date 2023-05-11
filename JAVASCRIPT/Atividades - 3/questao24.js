const gerarNumeroAleatorio = (numeroMinimo, numeroMaximo) => {
    return Math.random() * (numeroMaximo - numeroMinimo) + numeroMinimo;
}

console.log(`Número aleatório: ${gerarNumeroAleatorio(50, 200)}`);