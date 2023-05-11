let vetor = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];

const ordernarNumeros = (vetor) => {
    for (let primeiroNumero = 0; primeiroNumero < vetor.length; primeiroNumero++) {
        for (let segundoNumero = primeiroNumero + 1; segundoNumero < vetor.length; segundoNumero++) {
            if (vetor[primeiroNumero] > vetor[segundoNumero]) {
                var auxiliar = vetor[primeiroNumero];
                vetor[primeiroNumero] = vetor[segundoNumero];
                vetor[segundoNumero] = auxiliar;
            }
        }
    }

    return vetor;
}

console.log(`Array em ordem crescente: ${ordernarNumeros(vetor)}`);