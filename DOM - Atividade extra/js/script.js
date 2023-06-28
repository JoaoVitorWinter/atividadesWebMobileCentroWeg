let botoesPais = document.getElementsByClassName("pais");
let opcoes = document.getElementsByClassName("pais");
let pergunta = 1;
let pontos = 0;
let ranking = JSON.parse(localStorage.getItem("ranking")) || [];

for (let i = 0; i < botoesPais.length; i++) {
  botoesPais[i].addEventListener("click", function () {
    switch (pergunta) {
      case 1:
        if (botoesPais[i].textContent == "Chade") {
            pontos += 1;
        }

        if (botoesPais[i].textContent == "Romênia") {
            pontos += 0.5;
        }
        

        opcoes[0].textContent = "Colômbia";
        opcoes[1].textContent = "Equador";
        opcoes[2].textContent = "Venezuela";
        opcoes[3].textContent = "Armênia";
        break;
      case 2:
        if (botoesPais[i].textContent == "Colômbia") {
            pontos += 1;
        }

        if (botoesPais[i].textContent == "Equador") {
            pontos += 0.5;
        }

        opcoes[0].textContent = "Nicarágua";
        opcoes[1].textContent = "El Salvador";
        opcoes[2].textContent = "Honduras";
        opcoes[3].textContent = "Guatemala";
        break;
      case 3:
        if (botoesPais[i].textContent == "El Salvador") {
            pontos += 1;
        }

        if (botoesPais[i].textContent == "Nicarágua") {
            pontos += 0.5;
        }

        opcoes[0].textContent = "Índia";
        opcoes[1].textContent = "Tajiquistão";
        opcoes[2].textContent = "Costa do Marfim";
        opcoes[3].textContent = "Níger";
        break;
      case 4:
        if (botoesPais[i].textContent == "Níger") {
            pontos += 1;
        }

        if (botoesPais[i].textContent == "Índia") {
            pontos += 0.5;
        }

        opcoes[0].textContent = "Palestina";
        opcoes[1].textContent = "Jordânia";
        opcoes[2].textContent = "Sudão";
        opcoes[3].textContent = "Sudão do Sul";
        break;
      case 5:
        if (botoesPais[i].textContent == "Palestina") {
            pontos += 1;
        }

        if (botoesPais[i].textContent == "Jordânia") {
            pontos += 0.5;
        }

        opcoes[0].textContent = "Egito";
        opcoes[1].textContent = "Síria";
        opcoes[2].textContent = "Iêmen";
        opcoes[3].textContent = "Iraque";
        break;
      case 6:
        if (botoesPais[i].textContent == "Síria") {
            pontos += 1;
        }

        if (botoesPais[i].textContent == "Iêmen") {
            pontos += 0.5;
        }

        opcoes[0].textContent = "Países Baixos";
        opcoes[1].textContent = "Rússia";
        opcoes[2].textContent = "França";
        opcoes[3].textContent = "Luxemburgo";
        break;
      case 7:
        if (botoesPais[i].textContent == "Luxemburgo") {
            pontos += 1;
        }

        if (botoesPais[i].textContent == "Países Baixos") {
            pontos += 0.5;
        }
        
        opcoes[0].textContent = "Camarões";
        opcoes[1].textContent = "Guiné";
        opcoes[2].textContent = "Senegal";
        opcoes[3].textContent = "Mali";
        break;
      case 8:
        if (botoesPais[i].textContent == "Guiné") {
            pontos += 1;
        }

        if (botoesPais[i].textContent == "Mali") {
            pontos += 0.5;
        }

        opcoes[0].textContent = "Fiji";
        opcoes[1].textContent = "Tuvalu";
        opcoes[2].textContent = "Nova Zelândia";
        opcoes[3].textContent = "Austrália";
        break;
      case 9:
        if (botoesPais[i].textContent == "Tuvalu") {
            pontos += 1;
        }

        if (botoesPais[i].textContent == "Fiji") {
            pontos += 0.5;
        }

        opcoes[0].textContent = "Turquemenistão";
        opcoes[1].textContent = "Cazaquistão";
        opcoes[2].textContent = "Paquistão";
        opcoes[3].textContent = "Afeganistão";
        break;
      case 10:
        if (botoesPais[i].textContent == "Afeganistão") {
            pontos += 1;
        }

        if (botoesPais[i].textContent == "Paquistão") {
            pontos += 0.5;
        }

        localStorage.setItem("pontos", JSON.stringify(pontos));
        window.location.href = "submissao.html";
        break;
      default:
    }
    pergunta += 1;
    document.getElementById("bandeira").src =
      "assets/bandeira" + pergunta + ".png";
  });
}

const carregarSubmissao = () => {
    document.getElementById("pontuacao").innerText = "Sua pontuação: " + localStorage.getItem("pontos");
    document.getElementById("submissao").addEventListener("click", function() {
        if (document.getElementById("nome").value != "") {
            ranking.push([document.getElementById("nome").value, localStorage.getItem("pontos")]);
            localStorage.setItem("ranking", JSON.stringify(ranking));
            window.location.href = "rank.html";
        } else {
            document.getElementById("aviso").style.display = "block";
        }
    });
}

const gerarRanking = () => {
    ranking.sort(function(a, b) {
        return a[1] - b[1];
    });
    
    ranking.reverse();
    var tabela = document.getElementById("tabelaRanking");
    for (let i = 0; i < ranking.length; i++) {
        var row = document.createElement("tr");
        var numeroRanking = document.createElement("td");
        numeroRanking.innerText = (i + 1);
        var nomeRanking = document.createElement("td");
        nomeRanking.innerText = ranking[i][0];
        var pontosRanking = document.createElement("td");
        pontosRanking.innerText = ranking[i][1];
        row.appendChild(numeroRanking);
        row.appendChild(nomeRanking);
        row.appendChild(pontosRanking);
        tabela.appendChild(row);
    }
}