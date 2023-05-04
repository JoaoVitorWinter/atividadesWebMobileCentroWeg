let nota1 = 5, nota2 = 6, nota3 = 7;
let media = parseFloat(nota1 + nota2 + nota3) / 3;

console.log(`Média do aluno: ${media}.`);

if (media >= 7) {
    console.log("Situação: provado.");
} else if (media >= 5) {
    console.log("Situação: exame.");
} else {
    console.log("Situação: reprovado.");
}