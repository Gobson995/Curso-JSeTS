function falaOi () {
  return 'Oi';
}

let vaiExecutar = true;

 console.log(vaiExecutar && falaOi());

const cor = 'Vermelho';
const cores = null;
const corPadrao = cor || 'preto';
const corOutro = cores || 'preto';

console.log(corPadrao);
console.log(corOutro);

const pontuacao = 100;
const nivel = pontuacao >= 1000 ? 'Usuario VIP' : 'Usuario NORMAL';
console.log(nivel);