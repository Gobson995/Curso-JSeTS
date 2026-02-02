const novaTarefa = document.querySelector('.nova-tarefa');
const addTarefa = document.querySelector('.add-tarefa');
const tarefas = document.querySelector('.tarefas');

function criaLi () {
  const li = document.createElement('li');
  return li;
}

novaTarefa.addEventListener('keypress', function(e) {
  if(e.keyCode === 13) {
    e.preventDefault();
    if(!novaTarefa.value) return;
    criaTarefa(novaTarefa.value);
  }
});

function limpaInput () {
  novaTarefa.value = '';
  novaTarefa.focus();
}

function criaBotaoApagar (li) {
  li.innerText += ' ';
  const botaoApagar = document.createElement('button');
  botaoApagar.innerText = 'Apagar';
  botaoApagar.setAttribute('class', 'apagar');
  li.appendChild(botaoApagar); 
}

function criaTarefa (textoInput, salvar = true) {
  const li = criaLi();
  li.innerText = textoInput;
  tarefas.appendChild(li);
  limpaInput();
  criaBotaoApagar(li);
  
  if(salvar) salvarTarefas();
}

addTarefa.addEventListener('click', function () {
  if(!novaTarefa.value) return;
  criaTarefa(novaTarefa.value);
});

document.addEventListener('click', function(e) {
  const el = e.target;

  if(el.classList.contains('apagar')) {
    el.parentElement.remove();
    salvarTarefas();
  }
});

function salvarTarefas() {
  const liTarefas = tarefas.querySelectorAll('li');
  const listaDeTarefas = [];

  for (let tarefa of liTarefas) {
    let tarefaTexto = tarefa.innerText;
    tarefaTexto = tarefaTexto.replace('Apagar', '').trim();
    listaDeTarefas.push(tarefaTexto);
  }

  const tarefaJSON = JSON.stringify(listaDeTarefas);
  localStorage.setItem('tarefas', tarefaJSON);
}

function addTarefasSalvas() {
  const tarefasSalvas = localStorage.getItem('tarefas');

  if (!tarefasSalvas) return;  

  const listaDeTarefas = JSON.parse(tarefasSalvas);

  for(let tarefa of listaDeTarefas) {
    criaTarefa(tarefa, false);
  }
}

addTarefasSalvas();