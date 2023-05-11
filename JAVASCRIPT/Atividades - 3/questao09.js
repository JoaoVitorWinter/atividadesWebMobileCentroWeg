let vetor = [7, 5, 4];

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

