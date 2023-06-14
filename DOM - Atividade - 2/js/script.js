let mudarFundo = document.getElementById("mudarFundo");
let mudarCorTitulo = document.getElementById("mudarCorTitulo");
let mudarCorParagrafo = document.getElementById("mudarCorParagrafo");
let mudarFonteTitulo = document.getElementById("mudarFonteTitulo");
let mudarFonteParagrafo = document.getElementById("mudarFonteParagrafo");
let mudarTudo = document.getElementById("mudarTudo");

let fundo = document.getElementById("fundo");
let titulo = document.getElementById("titulo");
let paragrafo = document.getElementById("paragrafo");

let corFundo = document.getElementById("corFundo");
let corTitulo = document.getElementById("corTitulo");
let corParagrafo = document.getElementById("corParagrafo");
let fonteTitulo = document.getElementById("fonteTitulo");
let fonteParagrafo = document.getElementById("fonteParagrafo");

let fontes = ["'Abril Fatface', cursive", "'Bebas Neue', sans-serif", "'Bitter', serif", "'Caveat', cursive", "'Courier Prime', monospace", "'Josefin Sans', sans-serif", "'Kablammo', cursive", "'Lato', sans-serif", "'Montserrat', sans-serif", "'Mountains of Christmas', cursive", "'Orbitron', sans-serif", "'Poppins', sans-serif", "'Rajdhani', sans-serif", "'Righteous', cursive", "'Rubik Puddles', cursive"]

const gerarCorAleatoria = () => {
    var red = parseInt(Math.round(Math.random() * 255));
    var green = parseInt(Math.round(Math.random() * 255));
    var blue = parseInt(Math.round(Math.random() * 255));

    return `rgb(${red}, ${green}, ${blue})`;
}

const escolherFonteAleatoria = () => {
    return fontes[parseInt(Math.round(Math.random() * 14))];
}

mudarFundo.addEventListener("click", function () {
    fundo.style.backgroundColor = gerarCorAleatoria();
    corFundo.innerText = `Cor do fundo atual: ${fundo.style.backgroundColor}`;
});

mudarCorTitulo.addEventListener("click", function () {
    titulo.style.color = gerarCorAleatoria();
    corTitulo.innerText = `Cor do título atual: ${titulo.style.color}`;
});

mudarCorParagrafo.addEventListener("click", function () {
    paragrafo.style.color = gerarCorAleatoria();
    corParagrafo.innerText = `Cor do parágrafo atual: ${paragrafo.style.color}`;
});

mudarFonteTitulo.addEventListener("click", function() {
    titulo.style.fontFamily = escolherFonteAleatoria();
    fonteTitulo.innerText = `Fonte do título atual: ${titulo.style.fontFamily}`;
});

mudarFonteParagrafo.addEventListener("click", function() {
    paragrafo.style.fontFamily = escolherFonteAleatoria();
    fonteParagrafo.innerText = `Fonte do parágrafo atual: ${paragrafo.style.fontFamily}`;
});

mudarTudo.addEventListener("click", function () {
    fundo.style.backgroundColor = gerarCorAleatoria();
    titulo.style.color = gerarCorAleatoria();
    paragrafo.style.color = gerarCorAleatoria();
    titulo.style.fontFamily = escolherFonteAleatoria();
    paragrafo.style.fontFamily = escolherFonteAleatoria();

    corFundo.innerText = `Cor do fundo atual: ${fundo.style.backgroundColor}`;
    corTitulo.innerText = `Cor do título atual: ${titulo.style.color}`;
    corParagrafo.innerText = `Cor do parágrafo atual: ${paragrafo.style.color}`;
    fonteTitulo.innerText = `Fonte do título atual: ${titulo.style.fontFamily}`;
    fonteParagrafo.innerText = `Fonte do parágrafo atual: ${paragrafo.style.fontFamily}`;
})