function criaHoraDosSegundos (segundos) {
  const data = new Date (segundos * 1000);
  return data.toLocaleTimeString('pt-BR', {
    hour12: false,
    timeZone: 'UTC'
  });
}

const relogio = document.querySelector('.relogio');
const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar');
const zerar = document.querySelector('.zerar');

let segundos = 0;
let timer;

function iniciaTimer () {
  clearInterval(timer); 

  timer = setInterval(function() {
    segundos++;
    relogio.innerHTML = criaHoraDosSegundos(segundos);
  }, 1000);
}

iniciar.addEventListener('click', function(event) {
  iniciaTimer();
  relogio.classList.remove('pausado');
  relogio.classList.add('andando');
});

pausar.addEventListener('click', function(event) {
  clearInterval(timer);
  relogio.classList.remove('andando');
  relogio.classList.add('pausado');
});

zerar.addEventListener('click', function(event) {
  clearInterval(timer);
  segundos = 0;
  relogio.innerHTML = criaHoraDosSegundos(segundos);
  relogio.classList.remove('pausado');
  relogio.classList.remove('andando');
});