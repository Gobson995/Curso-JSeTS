const nome = 'Gustavo';
var idade = 19;

console.log(`Meu nome é ${nome}`); // melhor forma!
console.log(nome, "tem", idade, "anos!");

console.log(typeof nome);
console.log(typeof idade);

let nomeAluno; // undefined -> não aponta para lugar nenhum na memória
let sobrenomeAluno = null; // nulo -> não aponta para lugar nenhum na memória

const nomes = ['Gustavo', 'João', 'Maria'];
//                0;        1         2

console.log(nomes[0]);

nomes[0] = 'GustavoBada';

console.log(nomes[0]);

function saudacao(nome) {
  console.log(`opa, ${nome}!`);
  return nome;
}

saudacao(nome);

let nomeDaFuncao = saudacao(nome);

console.log(nomeDaFuncao);

const pessoa1 = {
  nome: 'Luiz',
  sobrenome: 'Miranda',
  idade: 25
};

console.log(pessoa1.nome);
console.log(pessoa1.sobrenome);
console.log(pessoa1.idade);