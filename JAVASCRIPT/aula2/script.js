console.log("FUNÇÃO\n");

// Criando uma função através de uma declaração
function somar(a, b) {
    return a + b;
}

console.log(somar(3, 4));

// Criando uma função através de uma expressão
const subtrair = function(a, b) {
    return a - b;
}

console.log(subtrair(10, 3));

// Criando uma função através de arrow functions
const multiplicar = (a, b) => a * b;

console.log(multiplicar(3, 4));

// Escopo global

let variavelGlobal = "Olá!";

function minhaFuncaoGlobal() {
    console.log(variavelGlobal);
}

minhaFuncaoGlobal(); // "Olá!"
console.log(variavelGlobal); // "Olá!"

// Escopo local

function minhaFuncaoLocal() {
    let variavelLocal = "Olá!";
    console.log(variavelLocal);
}

minhaFuncaoLocal(); // "Olá!"
// console.log(variavelLocal);

console.log("\nOBJETO\n");

// Objeto: coleção de propriedades

// Criação de objeto
const carro = {
    marca: "Toyota",
    modelo: "Corolla",
    ano: 2020,
    // Criando um método
    ligar: function() {
        console.log("O carro está ligado.");
    }
    // chave: valor
}

console.log(carro.marca); // "Toyota"
console.log(carro['modelo']); // "Corolla"
console.log(carro.ano); // 2020
carro.ligar(); // "O carro está ligado."

carro.cor = "preto"; // Criando nova variável

console.log(carro.cor); // "preto"

console.log("\nMATH\n");

console.log(Math.random()); // Retorna um número entre 0 e 1

console.log(Math.round(4.7)); // Retorna 5
console.log(Math.round(4.4)); // Retorna 4

console.log(Math.max(0, 3)); // Retorna 3
console.log(Math.min(0, 3)); // Retorna 0

console.log("\nDATE\n");

let dataAtual = new Date();
console.log(dataAtual);

let dataEspecifica = new Date("2023-12-25");
console.log(dataEspecifica);

console.log(dataAtual.getFullYear());
console.log(dataAtual.getMonth());
console.log(dataAtual.getDate());
console.log(dataAtual.getHours());
console.log(dataAtual.getMinutes());
console.log(dataAtual.getSeconds());

console.log("\nARRAYS\n");

const frutas = ["maçã", "banana", "uva"];
console.log(frutas[1]); // "banana"

const numeros = [1, 2, 3];
numeros.push(4);
console.log(numeros); // [1, 2, 3, 4]

numeros.pop();
console.log(numeros); // [1, 2, 3]

const animais = ["cachorro", "gato", "coelho"];
animais.shift();
console.log(animais); // ["gato", "coelho"]

animais.unshift("tartaruga");
console.log(animais) //  ["tartaruga", "gato", "coelho"]

const cores = ["vermelho", "verde", "azul"];
cores.splice(1, 0, "amarelo");
console.log(cores); // ["vermelho", "amarelo", "verde", "azul"]

cores.splice(1, 2);
console.log(cores); // ["vermelho", "azul"]

const numerosForEach = [1, 2, 3, 4, 5];
numerosForEach.forEach((numero) => {
    console.log(numero * 2);
});

const numerosMap = [1, 2, 3, 4, 5];
const dobrados = numerosMap.map((numero) => {
    return numero * 2;
});

console.log(dobrados); // [2, 4, 6, 8, 10]

const numerosFilter = [1, 2, 3, 4, 5];
const impares = numerosFilter.filter((numero) => {
    return numero % 2 !== 0;
});

console.log(impares); // [1, 3, 5]

const numerosReduce = [1, 2, 3, 4, 5];
const soma = numerosReduce.reduce((acumulador, numero) => {
    return acumulador + numero;
}, 0);

console.log(soma); // 15