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

// Atribuição via desestruturação arrays

const numeros = [ [1, 2, 3], [4, 5, 6], [7, 8, 9] ];

console.log(numeros[1][2]);

const [,[,,seis]] = numeros; // metodo mais dificil, mas funciona igual

console.log(seis);

// Atribuição via desestruturação objetos

const pessoa = {
  nome: 'Gustavo',
  sobrenome: 'Bada',
  idade: 19,
  endereco: {
    rua: 'Pernambuco',
    numero: 94
  }
};

const { nome } = pessoa;
const { endereco: { rua, numero } } = pessoa;
const { nome: n, ...resto } = pessoa;


console.log(nome);
console.log(rua, numero);
console.log(n, resto);

const carro = {
  nomec: 'Uno',
  modelo: 'Fire',
  ano: 2002
};

for (let chaves in carro) {
  console.log(chaves);
}

for (let chaves in carro) {
  console.log(carro[chaves]);
}

const alfabeto = "abcde"
for (let valor of alfabeto) {
  console.log(valor);
}

const min = 1;
const max = 6;
let rand = 5;

do {
  let r = Math.random() * (max - min) + min;
  rand = Math.floor(r);
  console.log(rand);
} while (rand !== 5);

// Tratamento de erros

function soma (x, y) {
  if (typeof x !== 'number' || typeof y !== 'number') {
    throw new Error ('x e y precisam ser numeros!');
  }

  return x + y;
}

console.log(soma(10, 20));

try {
  console.log(soma(10, '20'));
} catch {
  console.log('Deu erro, estão eu mostro isso');
} finally {
  console.log('Eu sempre funciono');
}

// setInterval e setTimeout

let ops = 1;

function contador(a) {
  return a + 1;
}

const conta = setInterval(function() {
  console.log(ops);
  ops = contador(ops);
}, 1000);

setTimeout(function() {
  clearInterval(conta);
}, 3500);

setTimeout(function() {
  console.log('Opa');
}, 5000);