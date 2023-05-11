let frutas = ["maçã", "banana", "laranja"];

console.log(`Array frutas: ${frutas}`);
console.log(`Segundo elemento da array: ${frutas[1]}`);

frutas.push("morango");
console.log(`Fruta adiconada: ${frutas}`);

frutas.shift();
console.log(`Fruta retirada: ${frutas}`);

let frutas2 = ["manga", "abacaxi", "melancia"];
let todasFrutas = frutas.concat(frutas2);

console.log(`Todas as frutas: ${todasFrutas}`);

let doisPrimeiros = todasFrutas.slice(0, 2);

console.log(`Duas primeiras frutas: ${doisPrimeiros}`);

todasFrutas.splice(1, 1);

console.log(`Segunda fruta removida: ${todasFrutas}`);

console.log(`Índice da fruta banana: ${todasFrutas.indexOf("banana")}`);

let comecaComM = todasFrutas.filter((fruta) => {
    return fruta.charAt(0) == "M" || fruta.charAt(0) == "m";
});

console.log(`Frutas que começam com a letra m: ${comecaComM}`);

todasFrutas.forEach((fruta) => {
    console.log(fruta);
});