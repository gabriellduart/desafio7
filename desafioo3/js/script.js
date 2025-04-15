const form = document.getElementById('somaForm');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const valor1 = parseFloat(document.getElementById('valor1').value);
  const valor2 = parseFloat(document.getElementById('valor2').value);
  const resultado = valor1 + valor2;
  alert('Resultado da soma: ' + resultado);
});