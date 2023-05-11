let idade = 65;
let classeEleitoral;

if (idade < 16) {
    classeEleitoral = "Não eleitor";
} else if (idade >= 18 && idade <= 65) {
    classeEleitoral = "Eleitor obrigatório";
} else {
    classeEleitoral = "Eleitor facultativo";
}

console.log(`Sua classe eleitoral: ${classeEleitoral}`);