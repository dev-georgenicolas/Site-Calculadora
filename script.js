let resultado = document.getElementById('resultado');


function insert(valor) {
    resultado.innerText += valor;
}


function calcular() {
    try {
        resultado.innerText = eval(resultado.innerText); 
    } catch (error) {
        resultado.innerText = "Erro!";
    }
}


function limpar() {
    resultado.innerText = "";
}


function back() {
    resultado.innerText = resultado.innerText.substring(0, resultado.innerText.length - 1);
}
