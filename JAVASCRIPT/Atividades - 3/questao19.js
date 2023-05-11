let idades = [7, 15, 19, 27, 38, 56, 78];

const verificarIdade = (idade) => {
    return idade > 18;
}

console.log(`Idades todas maiores que 18 anos: ${idades.every(verificarIdade)}`);