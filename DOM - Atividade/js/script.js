let cookie = document.getElementById("cookie");
let boca = document.getElementById("boca");
let contagemDeCookies = 0

cookie.addEventListener("click", function() {
    contagemDeCookies += 1;
    document.getElementById("contador").innerText = contagemDeCookies;
});

boca.addEventListener("click", function() {
    if (contagemDeCookies != 0) {
        contagemDeCookies -= 1;
        document.getElementById("contador").innerText = contagemDeCookies;
    } else {
        alert("Você não tem cookies para comer!");
    }
});