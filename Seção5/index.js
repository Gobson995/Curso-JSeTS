const nomes = ['Gustavo', 'Alexia', 'João'];
const novo = nomes;
const novoCopia = [...nomes];

const removido = novo.pop(); // remove do final
console.log(nomes);
console.log(removido);
console.log(novoCopia);

novoCopia.shift(); // remove do começo e move
console.log(novoCopia);

novoCopia.push('Maria'); // add no final ---- unshift() -> add no começo e move
console.log(novoCopia);

const outrosNomes = ['Leonardo', 'Maria Clara', 'Cilandra', 'Edinho'];
const fatiar = outrosNomes.slice(1,3); // pode usar numeros negativos
console.log(fatiar);

const nome = 'Luiz Otavio Miranda';
const nomeCompleto = nome.split(' ');
const nomeDeNovo = nomeCompleto.join(' ');
console.log(nomeCompleto);
console.log(nomeDeNovo);

//                -5        -4       -3          -2       -1            tamanho menos o numero
//                 0        1        2           3        4
const nomess = ['Maria', 'João', 'Eduardo', 'Gabriel', 'Julia'];
const deletados = nomess.splice(3, 2, 'Luiz', 'Otavio');
console.log(nomess, deletados);

// concatenar
const a1 = [1, 2, 3];
const a2 = [4, 5, 6];

const a3 = a1.concat(a2, [7, 8, 9], 'opa');
console.log(a3);

const a4 = a2.concat(a1);
console.log(a4);

const a5 = [...a1, ...a2]; // ...rest -> ...spread
console.log(a5);

