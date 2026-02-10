// jeito de fazer um objeto -> pegando data de nascimento
const pessoa1 = new Object();
pessoa1.nome = 'Gustavo';
pessoa1.sobrenome = 'Bada';
pessoa1.idade = 19;
pessoa1.getDataNascimento = function() {
  const dataAtual = new Date();
  return dataAtual.getFullYear() - this.idade;
}
console.log(pessoa1.getDataNascimento());

function Produto(nome, preco, estoque) {
  this.nome = nome,
  this.preco = preco,

  Object.defineProperty(this, 'estoque', {
    enumerable: true, // mostra a chave
    value: estoque, // valor
    writable: true, // pode alterar
    configurable: false // configuravel (delete, reconfigurar...)
  });
}

// prototypes
function Pessoa (nome, sobrenome) {
  this.nome = nome;
  this.sobrenome = sobrenome;
}

Pessoa.prototype.nomeCompleto = function () {
  return this.nome + ' ' + this.sobrenome;
};

const pessoa2 = new Pessoa('Rubem', 'Zanatta');
console.log(pessoa2.nomeCompleto());

function Venda (preco) {
  this.preco = preco;
}

Venda.prototype.desconto = function (percentual) {
  this.preco = this.preco - (this.preco * (percentual / 100));
}

const p1 = new Venda (100);
console.log(p1);
p1.desconto(10);
console.log(p1.preco);

const p2 = {
  preco: 50
};

Object.setPrototypeOf(p2, Venda.prototype);
p2.desconto(5);
console.log(p2.preco);

// definindo um pai
const animal = {
  som: 'Barulho Genérico',
  fazerBarulho() {
    return this.som;
  }
};

const cachorro = Object.create(animal);

cachorro.som = 'AU AU';

console.log(cachorro.fazerBarulho());
