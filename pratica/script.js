function entra(id) {
    var divEntrada = document.getElementById(id);
    divEntrada.style.width = '110px';
    divEntrada.style.width = '110px';
}

function sai(id) {
    var divSaida = document.getElementById(id);
    divSaida.style.width = '100px';
    divSaida.style.width = '100px';
}

function clica(id) {
    var divClicada = document.getElementById(id);
    var divConteudo = document.getElementById('conteudo');
    divConteudo.innerText = divClicada.innerText;
}