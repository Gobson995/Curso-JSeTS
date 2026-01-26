const form = document.querySelector('#form');

form.addEventListener('submit', function (evento) {
  evento.preventDefault();
  const inputPeso = evento.target.querySelector('#peso');
  const inputAltura = evento.target.querySelector('#altura');

  const peso = Number(inputPeso.value);
  const altura = Number(inputAltura.value);

  if (!peso) {
    setResultado('Peso inválido.', false);
    return;
  }

  if (!altura) {
    setResultado('Altura inválida.', false);
    return;
  }

  const imc = getImc(peso, altura);

  const { texto, ehNormal } = getNivelImc(imc);

  const msg = `Seu IMC é ${imc} (${texto})!`;

  setResultado(msg, ehNormal);
});

function getNivelImc (imc,verifica) {
  const nivel = ['Abaixo do peso', 'Peso normal', 'Sobrepeso', 'Obesidade grau I', 'Obesidade grau II', 'Obesidade grau III'];

  if (imc >= 39.9) return { texto: nivel[5], ehNormal: false };
  if (imc >= 34.9) return { texto: nivel[4], ehNormal: false };
  if (imc >= 29.9) return { texto: nivel[3], ehNormal: false };
  if (imc >= 24.9) return { texto: nivel[2], ehNormal: false };
  if (imc >= 18.5) return { texto: nivel[1], ehNormal: true };
  if (imc < 18.5) return { texto: nivel[0], ehNormal: false };

}

function getImc (peso, altura) {
  const imc = peso/(altura*altura);
  return imc.toFixed(2);
}

function criaP (className) {
  const p = document.createElement('p');
  return p;
}

function setResultado (mensagem, isValid) {
  const resultado = document.querySelector('#resultado');
  resultado.innerHTML = '';

  const p = criaP();
  p.innerHTML = mensagem;
  resultado.appendChild(p);

  if (isValid) p.classList.add('paragrafo-resultado');
  else p.classList.add('resultado-ruim');
}