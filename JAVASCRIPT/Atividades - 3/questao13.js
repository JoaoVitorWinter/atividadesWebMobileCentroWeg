let capitalInicial = 1000;
let tempoEmMeses = 5;
let taxaJurosMensal = 0.02;

let montante = capitalInicial * (1 + taxaJurosMensal) ** tempoEmMeses;

console.log(`Retorno de um investimento: R$${montante.toFixed(2)}`);