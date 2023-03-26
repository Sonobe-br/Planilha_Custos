// função para calcular o total e a média
function calcular() {
	var tabela = document.getElementById("tabela");
	var linhas = tabela.getElementsByTagName("tr");
	var total = 0;
	for (var i = 1; i < linhas.length; i++) {
		var valor = parseFloat(linhas[i].getElementsByTagName("td")[2].innerHTML);
		total += valor;
	}
	var media = total / (linhas.length - 1);
	document.getElementById("total").innerHTML = total.toFixed(2);
	document.getElementById("media").innerHTML = media.toFixed(2);
}

// função para adicionar uma nova linha na tabela
function adicionar() {
	var tabela = document.getElementById("tabela");
	var linha = tabela.insertRow(-1);
	var celula1 = linha.insertCell(0);
	var celula2 = linha.insertCell(1);
	var celula3 = linha.insertCell(2);
	var data = new Date();
	celula1.innerHTML = data.toLocaleDateString();
	celula2.innerHTML = prompt("Descrição:");
	celula3.innerHTML = parseFloat(prompt("Valor:")).toFixed(2);
	calcular();
}

// função para carregar os dados da tabela
function carregar() {
	var dados = localStorage.getItem("dados");
	if (dados) {
		document.getElementById("tabela").innerHTML += dados;
		calcular();
	}
}

// função para salvar os dados da tabela
function salvar() {
	localStorage.setItem("dados", document.getElementById("tabela").innerHTML);
}
window.onload = carregar;
window.onbeforeunload = salvar;
