let array = [0, 1, 2, 3, 4, 5];
let maiorNumero = array[0];

for (let indice = 0; indice < array.length; indice++) {
    if (array[indice] > maiorNumero) {
        maiorNumero = array[indice];
    }
}

console.log(`Maior número da array: ${maiorNumero}.`);