const gerarSenha = (numero) => {
    senha = "";
    caracteres = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-=!@#$%¨&*()_+¹²³£¢¬§\'\"\´[~],.;/`{^}<>:?ªº°|\\";

    for (let indice = 1; indice <= numero; indice++) {
        senha += caracteres.charAt(Math.round(Math.random() * caracteres.length));
    }

    return senha;
}

console.log(`Nova senha: ${gerarSenha(20)}`);