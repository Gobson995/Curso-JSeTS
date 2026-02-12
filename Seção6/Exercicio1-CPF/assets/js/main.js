const cpfInput = document.querySelector('.cpf-digitado');
const btnVerificar = document.querySelector('.verificar-cpf');

function ValidaCPF(cpfEnviado) {
  Object.defineProperty(this, 'cpfLimpo', {
    get: function() {
      return String(cpfEnviado).replace(/\D+/g,'');
    }
  });
}

ValidaCPF.prototype.validarPrimeiro = function() {
  let ultimo1 = 0;
  let soma1 = 0;
  let multiplico1 = 10;
  
  for(let i = 0; i < 9; i++) {
    soma1 += (multiplico1 * this.cpfLimpo[i]);
    multiplico1--;
  }

  let conta = 11 - (soma1 % 11);
  if (conta >= 10) conta = 0;

  return conta === Number(this.cpfLimpo[9]);
}

ValidaCPF.prototype.validarSegundo = function() {
  let soma2 = 0;
  let multiplico2 = 11;
  
  for(let i = 0; i < 10; i++) {
    soma2 += (multiplico2 * this.cpfLimpo[i]);
    multiplico2--;
  }

  let conta = 11 - (soma2 % 11);
  if (conta >= 10) conta = 0;
  
  return conta === Number(this.cpfLimpo[10]);
}

ValidaCPF.prototype.ehSequencia = function () {
  const sequencia = this.cpfLimpo[0].repeat(this.cpfLimpo.length);
  return sequencia === this.cpfLimpo;
}

ValidaCPF.prototype.valida = function() {
  if(typeof this.cpfLimpo === 'undefined') return false;
  if(this.cpfLimpo.length !== 11) return false;
  if(this.ehSequencia()) return false;

  if (!this.validarPrimeiro()) return false;
  if (!this.validarSegundo()) return false;

  return true;
}

btnVerificar.addEventListener('click', function(e) {
  e.preventDefault();
  
  const cpf = new ValidaCPF(cpfInput.value);
  const resposta = cpf.valida();

  setResultado(resposta);
});

function criaP () {
  const p = document.createElement('p');
  return p;
}

function setResultado (valido) {
  const resultado = document.querySelector('#resultado');
  resultado.innerHTML = '';

  const p = criaP();

  if (valido) {
    p.innerHTML = 'Esse CPF é válido';
    p.classList.add('existe');
  }
  else {
    p.innerHTML = 'CPF inválido';
    p.classList.add('nao-existe');
  }

  resultado.appendChild(p);
}




