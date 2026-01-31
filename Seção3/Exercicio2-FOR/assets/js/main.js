const elementos = [
  {tag: 'div', texto: 'Marcos Rocha (GC)'},
  {tag: 'div', texto: 'Borré (cabeça)'},
  {tag: 'section', texto: 'Borré (pé)'},
  {tag: 'footer', texto: 'Bernabei'}
];

const container = document.querySelector('.container'); // selecionou o container
const div = document.createElement('div'); // criou a div nova

for(let i = 0; i < elementos.length; i++) {
  let { tag, texto } = elementos[i]; // pegou os elementos
  let tagCriada = document.createElement(tag); // criou as tags
  tagCriada.innerText = texto; // add o texto dentro da tag
  div.appendChild(tagCriada); // add a tag dentro da div criada acima
}

container.appendChild(div); // vai no container e add todas as divs criadas