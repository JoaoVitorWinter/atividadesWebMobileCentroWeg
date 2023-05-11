let string = "Teste";
let caractere = "e";
let quantidade = 0;

string = string.split("");

for (indice = 0; indice < string.length; indice++) {
    if (string[indice] == caractere) {
        quantidade++;
    }
}

console.log(`Quantidade que o caractere aparece: ${quantidade}`);