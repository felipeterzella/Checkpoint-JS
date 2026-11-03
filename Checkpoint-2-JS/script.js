let pontuacao = 0;

function aumentar() {
  pontuacao++;
  document.getElementById("pontuacao").innerText = pontuacao;
}

function diminuir() {
  if (pontuacao === 0) {
    return;
  }
  pontuacao--;
  document.getElementById("pontuacao").innerText = pontuacao;
}