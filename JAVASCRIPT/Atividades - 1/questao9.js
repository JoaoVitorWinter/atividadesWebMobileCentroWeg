let arrayNumeros = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];

for (let primeiroIndice = 0; primeiroIndice < arrayNumeros.length; primeiroIndice++) {
    for (let segundoIndice = primeiroIndice + 1; segundoIndice < arrayNumeros.length; segundoIndice++) {
        if (arrayNumeros[primeiroIndice] > arrayNumeros[segundoIndice]) {
            var auxiliar = arrayNumeros[primeiroIndice];
            arrayNumeros[primeiroIndice] = arrayNumeros[segundoIndice];
            arrayNumeros[segundoIndice] = auxiliar;
        }
    }
}

console.log(`Array ordenada: ${arrayNumeros}.`);