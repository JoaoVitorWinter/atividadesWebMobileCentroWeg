let numeros = [73, 29, 42, 35, 56];

console.log(`Array transformada em uma string separada por vírgula: ${numeros.join(",")}`);
console.log(`Array invertido: ${numeros.reverse()}`);

numeros.reverse()

let doisElementos = numeros.slice(0, 2);

console.log(`Dois primeiros elementos do array: ${doisElementos}`);
console.log(`Array ordenada alfabeticamente: ${numeros.sort()}`);

let numerosPares = numeros.filter((numero) => {
    return numero % 2 == 0;
});

console.log(`Números pares da array: ${numerosPares}`);

let numerosQuadrado = numeros.map((numero) => {
    return numero ** 2;
});

console.log(`Quadrados dos números da array: ${numerosQuadrado}`);

let soma = numeros.reduce((total, numero) => {
    return total + numero;
}, 0);

console.log(`Soma dos números da array: ${soma}`);