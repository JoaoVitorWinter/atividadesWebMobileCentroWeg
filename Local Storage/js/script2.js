let botaoToggle = document.getElementById("toggle");

document.body.className = localStorage.getItem("modo") || "modo-claro";

botaoToggle.addEventListener("click", function() {
    if (document.body.className === "modo-claro") {
        document.body.className = "modo-escuro";
    } else {
        document.body.className = "modo-claro";
    }

    localStorage.setItem("modo", document.body.className);
});