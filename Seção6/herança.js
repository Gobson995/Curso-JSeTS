// Produto -> aumento e desconto
// Camiseta -> cor, Caneca = material

function Produto(nome, preco) {
  this.nome = nome;
  this.preco = preco;
}

Produto.prototype.aumento = function(quantia) {
  this.preco += quantia;
}
Produto.prototype.desconto = function(quantia) {
  this.preco -= quantia;
}

function Camiseta(nome, preco, cor) {
  Produto.call(this, nome, preco);
  this.cor = cor; // eu usei o prototype dos outros e agora to adicionando caracteristica novas.
}

Camiseta.prototype = Object.create(Produto.prototype);
Camiseta.prototype.constructor = Camiseta;

function Caneca(nome, preco, material, estoque) {
  Produto.call(this, nome, preco);
  this.material = material;

  Object.defineProperty(this, 'estoque', {
    enumerable: true,
    configurable: false,
    get: function() {
      return estoque;
    },
    set: function(valor) {
      if (typeof valor !== 'number') return;
      estoque = valor;
    }
  });
}

Caneca.prototype = Object.create(Produto.prototype);
Caneca.prototype.constructor = Caneca;

const camiseta = new Camiseta('Regata', 59.9, 'Preta');
camiseta.desconto(10);
console.log(camiseta);

const caneca = new Caneca('Batman', 27.8, 'porcelana', 5);
caneca.aumento(5);
console.log(caneca);
console.log(caneca.estoque);
