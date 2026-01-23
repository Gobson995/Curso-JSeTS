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

