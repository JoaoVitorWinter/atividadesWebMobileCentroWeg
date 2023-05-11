const converterMorse = (string) => {
    var alfabeto = {
        '.-': 'a',
        '-...': 'b',
        '-.-.': 'c',
        '-..': 'd',
        '.': 'e',
        '..-.': 'f',
        '--.': 'g',
        '....': 'h',
        '..': 'i',
        '.---': 'j',
        '-.-': 'k',
        '.-..': 'l',
        '--': 'm',
        '-.': 'n',
        '---': 'o',
        '.--.': 'p',
        '--.-': 'q',
        '.-.': 'r',
        '...': 's',
        '-': 't',
        '..-': 'u',
        '...-': 'v',
        '.--': 'w',
        '-..-': 'x',
        '-.--': 'y',
        '--..': 'z'
    };

    let mensagemDecodificada = "";

    string.split("  ").map((palavra) => {
        palavra.split(" ").map((letra) => {
            mensagemDecodificada += alfabeto[letra];
        });
        mensagemDecodificada += " ";
    });

    return mensagemDecodificada;
}

console.log(converterMorse(". ... - --- ..-  -.. . -.-. --- -.. .. ..-. .. -.-. .- -. -.. ---  -- --- .-. ... .  .- .--. . -. .- ...  -.-. --- --  .--- .- ...- .- ... -.-. .-. .. .--. -"));