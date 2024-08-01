
function saudacao(nome) {
    return "Olá, " + nome + "!";
}

document.getElementById('btnSaudacao').addEventListener('click', function() {
    const mensagem = saudacao("Mundo");
    alert(mensagem);
});
