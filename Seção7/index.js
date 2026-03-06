class Pessoa {
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }

    falar() {
        console.log(`${this.nome} está falando!`);
    }

    comer() {
        console.log(`${this.nome} está comendo!`);
    }

    beber() {
        console.log(`${this.nome} está bebendo!`);
    }
}

const p1 = new Pessoa('Gustavo', 'Bada');
const p2 = new Pessoa('Jaquelini', 'Bristot');

console.log(p1);

p1.falar();
p1.comer();
p1.beber();
p2.comer();

// pular linha
console.log();
console.log();

// getter e setter

const _velocidade = Symbol('velocidade');

class Carro {
    constructor(nome) {
        this.nome = nome;
        this[_velocidade] = 0;
    }
    
    get velocidade() {
        console.log('USANDO O GETTER');
        return this[_velocidade];
    }

    set velocidade(valor) {
        console.log('USANDO O SETTER');
        if (typeof valor !== 'number') return;
        if (valor > 100 || valor < 0) return;
        this[_velocidade] = valor;
    }

    acelerar() {
        if (this[_velocidade] >= 100) return;
        this[_velocidade]++;
    }

    frear() {
        if (this[_velocidade] <= 0) return;
        this[_velocidade]--;
    }
}

const c1 = new Carro('Fusca');

c1.velocidade = 55;
console.log(c1.velocidade);

// pular linha
console.log();
console.log();

// herança com classes

class Eletronico {
    constructor(nome) {
        this.nome = nome;
        this.ligado = false;
    }

    ligar() {
        if (this.ligado) {
            console.log('Seu eletronico ja está ligado');
            return;
        }

        this.ligado = true;
    }

    desligar() {
        if (!this.ligado) {
            console.log('Seu eletronico ja está desligado');
            return;
        }

        this.ligado = false
    }
}

class Smartphone extends Eletronico {
    constructor(nome, bateria) {
        super(nome);
        this._bateria = bateria;
    }

    get nivelBateria() {
        return this._bateria;
    }

    set nivelBateria(valor) {
        if (valor >= 100) {
            console.log('Sua bateria ja está completa');
            this._bateria = 100;
            return;
        }

        if (valor <= 0) {
            console.log('Sua bateria está descarregada');
            this._bateria = 0;
            this.desligar();
            return;
        }

        this._bateria = valor;
    }

    usando () {
        this.nivelBateria--;
    }

    carregando() {
        this.nivelBateria++;
    }
}

const s1 = new Smartphone ('IPHONE 11', 9);
s1.ligar();

for (let i = 0; i < 200; i++) {
    s1.usando();
    console.log('Bateria atual: ' + s1.nivelBateria);

    if(s1.nivelBateria == 0) break;
}

// pular linha
console.log();
console.log();

class Saudacao {
    constructor (nome) {
        this.nome = nome;
    }

    saudacaoNome() {
        console.log("Olá " + this.nome + "! Como você esta?");
    }

    static soSaudacao() {
        console.log("Olá! Como você esta?");
    }
}

const chamar = new Saudacao('Rubinho');
chamar.saudacaoNome();

Saudacao.soSaudacao();


