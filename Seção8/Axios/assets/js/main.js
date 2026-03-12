// fetch('pessoas.json') // busca os dados do json
//    .then(resposta => resposta.json()) // pega a resposta, carrega pra json
//    .then(json => carregaElementosNaPagina(json));  // pega o json que criou e manda pra função

axios('pessoas.json')
    .then(resposta => carregaElementosNaPagina(resposta.data)); // mesma coisa, pega o get com uma linha

function carregaElementosNaPagina(json) {  
    const table = document.createElement('table');
    for (let pessoa of json) {
        const tr = document.createElement('tr');

        const td1 = document.createElement('td');
        td1.innerHTML = pessoa.nome;
        tr.appendChild(td1);

        const td2 = document.createElement('td');
        td2.innerHTML = pessoa.idade;
        tr.appendChild(td2);

        const td3 = document.createElement('td');
        td3.innerHTML = pessoa.salario;
        tr.appendChild(td3);

        table.appendChild(tr);
    }   // add os dados de cada pessoa em uma tabela

    // add a tabela no html
    const resultado = document.querySelector('.resultado');
    resultado.appendChild(table);
}