function calcular() {
  let preco = Number(document.getElementById("preco").value);
  let quantidade = Number(document.getElementById("quantidade").value);

  let total = preco * quantidade;

  document.getElementById("resultado").innerText =
    "Total da compra: R$ " + total.toFixed(2).replace(".", ",");
}