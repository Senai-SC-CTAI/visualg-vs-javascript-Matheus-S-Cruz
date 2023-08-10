function Calcular() {
  var numero = Number(document.getElementById("numero").value);
  var fatorial = 1;
  var resultado = 1;

  do {
    fatorial = fatorial * numero;
    numero = numero - 1;
    resultado = fatorial;
  } while (numero != 1);

  document.getElementById("r").innerHTML = resultado;
}
  