function criaPessoa (nome, sobrenome, idade) { // gerador de pessoas
  return {
    nome: nome,
    sobrenome: sobrenome,
    idade: idade
  };
}

const pessoa1 = criaPessoa('Gustavo', 'Bada', 19);
console.log(pessoa1.nome);

// posso criar quantos eu quiser
// varios jeitos de se fazer

function criaPessoa2 (nome, sobrenome, idade) {
  return { nome, sobrenome, idade };
}

const pessoa2 = criaPessoa2('Jaquelini', 'Bristot', 45);
console.log(pessoa2.sobrenome);

const pessoa3 = {
  nome: 'Rubem',
  sobrenome: 'Zanatta',
  idade: 50,

  fala() {
    console.log(`Eu sou o ${this.nome} ${this.sobrenome} e te desejo um bom dia!`);
  },

  incrementaIdade() {
    this.idade++;
    console.log(`Esse ano eu vou fazer ${this.idade} anos.`);
  }
};

pessoa3.fala();
pessoa3.incrementaIdade();