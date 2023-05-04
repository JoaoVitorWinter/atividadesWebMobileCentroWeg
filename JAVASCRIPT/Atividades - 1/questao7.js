let palavra = "Girafarig";

if (palavra.split('').reverse().join('').toLowerCase == palavra.toLowerCase) {
    console.log(`${palavra} é um palíndromo!`);
} else {
    console.log(`${palavra} não é um palíndromo!`);
}