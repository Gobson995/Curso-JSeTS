// fist-class objects
const souUmDado = function() {
  console.log('Sou um dado');
}
souUmDado();

// arrow function
const funcaoArrow = () => {
  console.log('Arrow function');
};
funcaoArrow();

// dentro de um objeto
const obj = {
  falar: function() {
    console.log('Estou dentro');
  },
  falar2() {
    console.log('Estou dentro de novo');
  }
};
obj.falar();
obj.falar2();

function funcao (a, b) {
  let total = 0;
  for (let argumentos of arguments) {
    total += argumentos;
  }

  console.log(total, a, b);
}
funcao(1, 2, 3, 4, 5, 6, 7);

function soma(a, b = 2, c = 3) {
console.log(a + b + c);
}
soma(1, 5);
soma(1, undefined, 4);

function conta(operador, acumulador, ...numeros) {
  for (let numero of numeros) {
    if (operador === '+') acumulador += numero;
    if (operador === '-') acumulador -= numero;
    if (operador === '*') acumulador *= numero;
    if (operador === '/') acumulador /= numero;
  }

  console.log(acumulador);
}
conta('+', 0, 20, 30, 40, 50);


function falaFrase(comeco) {
  function falaResto(resto) {
    return comeco + ' ' + resto;
  }
  return falaResto;
}
const fala = falaFrase('Ola');
const resto = fala('mundo!');
console.log(resto);


function criaMultiplicador(multiplicador) {
  return function(n) {
    return n * multiplicador;
  };
}
const duplica = criaMultiplicador(2);
const triplica = criaMultiplicador(3);
const quadriplica = criaMultiplicador(4);

console.log(duplica(2));
console.log(triplica(2));
console.log(quadriplica(2));

function retornaFuncao() {
  const nome = 'Gustavo';
  return function() {
    return nome;
  };
}
const funcaoo = retornaFuncao();
console.log(funcaoo); // aqui retorna a função de retorno da função principal
console.log(funcaoo()); // aqui executa a função que a função principal retorna

(function() {
  const frase = 'Testando a função imediata'
  console.log(frase);
})();

const frase = 'Outra coisa';
console.log(frase);

// factory function
function criaPessoa(nome, sobrenome, altura, peso) {
  return {
    nome,
    sobrenome,
    fala(assunto) {
      return `${this.nome} está falando sobre ${assunto}.`; // interpreta o nome que está dentro do objeto agora
    },                                                      // usar quando quer referenciar algo dentro do proprio objeto
    falaErrada(assunto) {
      return `${nome} está falando sobre ${assunto}.`; // sem o this ele pega a memoria mais antiga e não muda
    },
    altura,
    peso,
    get imc() { // faz com que isso vire um atributo e não mais um função -> getter
      const indiceCorp = this.peso / (this.altura ** 2);
      return indiceCorp.toFixed(2);
    },

    get nomeCompleto() {
      return '${this.nome} ${this.sobrenome}'; 
    },

    set nomeCompleto(valor) {
      valor = valor.split(' '); // separa quando tem um espaço
      this.nome = valor.shift(); // pega o primeiro elemento do array, atribui e depois exclui
      this.sobrenome = valor.join(' '); // pega os elementos de um array e junta transformando em uma string
    }
  };
}

const p1 = criaPessoa('Gustavo', 'Bada', 1.72, 70);
console.log(p1.fala('futebol'));
p1.nome = 'Mario';
console.log(p1.falaErrada('basquete'));
console.log(p1.imc);
p1.nomeCompleto = 'Rubem Paulo Zanatta';
console.log(p1.nome);
console.log(p1.sobrenome);