console.log("Hello World");

//Comentário de uma linha

const constante = "Variável que não pode ser alterada após declarada";
const variavel = "Variável que pode ser declarada mais de uma vez!";
const variavelLet = "Variável que só pode ser declarada uma única vez";

function exemploVar() {
    var nome = "Maria";
    console.log(nome);
}

exemploVar();

let nome = "João";
let sobrenome = "Silva";
let saudacao = `Olá, ${nome} ${sobrenome}`;

console.log(saudacao);

let numero = 10;

if (numero - parseInt(numero / 2) != parseInt(numero / 2)) {
    console.log("É ímpar");
} else {
    console.log("É par");
}

const n= 10;
let a = 0;
let b = 1;

console.log("Sequência de Fibonacci.");

for (let i = 1; i <= n; i++) {
    console.log(b);
    var temp = a;
    a = b;
    b = temp + b;
}