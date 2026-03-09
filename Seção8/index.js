// promisses

function rand (max, min) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) => {
        if (typeof msg !== 'string') reject('BAD VALUE');

        setTimeout(() => {
            resolve(msg);
        }, tempo);
    });
}

esperaAi('Conexão com o BD', rand(1, 3))
    .then(resposta => {
        console.log(resposta);
        return esperaAi('Buscando dados da Base', rand(1, 3));
    })
    .then(resposta => {
        console.log(resposta);
        return esperaAi(2222, rand(1, 3));
    })
    .then(resposta => {
        console.log(resposta);
    })
    .then(() => {
        console.log('Exibe dados na tela');
    })
    .catch(e => {
        console.log('ERRO: ', e);
    });


// assync / await

async function executar() {
    try {
        const teste1 = await esperaAi('Fase1', rand());
        console.log(teste1);

        const teste2 = await esperaAi(83, rand()); 
        console.log(teste2);

        const teste3 = await esperaAi('Fase3', rand());
        console.log(teste3);

        console.log('Terminamos na fase: ', teste3);
    } catch (erro) {
        console.log('ERRO: ', erro);
    }
}

executar();