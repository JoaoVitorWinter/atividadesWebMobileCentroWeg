console.log("Questão 1\n");

function adicionar(a, b) {
    return a + b;
}

console.log(adicionar(3, 4));

console.log("\nQuestão 2\n");

const subtrair = function (a, b) {
    return a - b;
}

console.log(subtrair(3, 4));

console.log("\nQuestão 3\n");

const multiplicar = (a, b) => a * b;

console.log(multiplicar(3, 4));

console.log("\nQuestão 4\n");

const ehPar = (numero) => {
    if (numero % 2 == 0) {
        return true;
    }

    return false;
}

console.log(ehPar(4));

console.log("\nQuestão 5\n");

const calcularMedia = (vetor) => {
    var soma = vetor.reduce((soma, numero) => {
        return soma + numero;
    }, 0);

    return soma / vetor.length;

}

console.log(calcularMedia([1, 2, 3, 4, 5]));

console.log("\nQuestão 6\n");

const transformarMaiuscula = (string) => {
    return string.toUpperCase();
}

console.log(transformarMaiuscula("Carlos"));

console.log("\nQuestão 7\n");

const filtrarNumeros = (vetor, numero) => {
    return vetor.filter((vetorNumero) => {
        return vetorNumero > numero;
    });
}

console.log(filtrarNumeros([1, 2, 3, 4, 5, 6, 7, 8, 9], 5));

console.log("\nQuestão 8\n");

const contarOcorrencias = (vetor, valor) => {
    vetor = vetor.filter((vetorValor) => {
        return vetorValor === valor;
    });

    return vetor.length;
}

console.log(contarOcorrencias([1, 2, 2, 3, 3, 3, 4, 4, 4, 4], 4));

console.log("\nQuestão 9\n");

const contarVogais = (string) => {
    string = string.toUpperCase().split("");

    var vogais = string.filter((letra) => {
        return letra == "A" || letra == "E" || letra == "I" || letra == "O" || letra == "U";
    });

    return vogais.length;
}

console.log(contarVogais("Exemplo de uma string qualquer"));

console.log("\nQuestão 10\n");

const criarArray = (numero) => {
    var vetor = [];

    for (let contador = 1; contador <= numero; contador++) {
        vetor.push(contador);
    }

    return vetor;
}

console.log(criarArray(5));

console.log("\nQuestão 11\n");

const carro = {
    marca: "Toyota",
    modelo: "Corolla",
    ano: 2020
}

console.log(carro.marca);
carro.ano = 2025;

carro.getIdade = function() {
    return new Date().getFullYear() - this.ano;
}

carro.getDescricao = function() {
    return (`Marca: ${this.marca}
    \nModelo: ${this.modelo}
    \nAno: ${this.ano}
    \nIdade: ${carro.getIdade()}`);
}

console.log(carro.getDescricao());

console.log("\nQuestão 12\n");

const numeroAleatorio = () => {
    return Math.random() * 100;
}

console.log(numeroAleatorio());

console.log("\nQuestão 13\n");

dataAtual = new Date();
dataAniversario = new Date("2005-08-31");

const diferencaDatas = (dataNova, dataAntiga) => {
    return (dataNova - dataAntiga) / 86400000;
}

console.log(diferencaDatas(dataAtual, dataAniversario));

console.log("\nQuestão 13²\n");

data = new Date();
data.setDate(data.getDate() + 100);


console.log(data);

console.log("\nQuestão 14\n");

const conta = {
    saldo: 0,
    titular: "João",
    depositar: function(dinheiro) {
        this.saldo += dinheiro;
    },
    sacar: function(dinheiro) {
        if (this.saldo >= dinheiro) {
            this.saldo -= dinheiro;
        } else {
            console.log("Valor inválido de saque!");
        }
    },
    verSaldo: function() {
        console.log(this.saldo);
    }
}

conta.depositar(50);
conta.verSaldo();
conta.sacar(35);
conta.verSaldo();
conta.sacar(50);

console.log("\nQuestão 15\n");

let frutas = ["maçã", "banana", "laranja"];

console.log(frutas[1]);

frutas.push("manga");
frutas.shift();

console.log(frutas.length);

for (let indice = 0; indice < frutas.length; indice++) {
    console.log(frutas[indice]);
}

frutas.forEach((fruta) => {
    console.log(fruta);
});

let tamanhoFrutas = frutas.map((fruta) => {
    return fruta.length;
});

console.log(tamanhoFrutas);

let frutasLongas = frutas.filter((fruta) => {
    return fruta.length > 5;
})

console.log(frutasLongas);

let somaNumeros = tamanhoFrutas.reduce((soma, numero) => {
    return soma + numero;
}, 0);

console.log(somaNumeros);