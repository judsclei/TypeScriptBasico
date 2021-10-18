"use strict";
class Moto {
    constructor(nomeMoto, velocidade = 0) {
        this.nomeMoto = nomeMoto;
        this.velocidade = velocidade;
        this.nomeMoto = nomeMoto;
        this.velocidade = velocidade;
    }
    Buzinar() {
        console.log('Toooooooooot!');
    }
    Acelerar(delta) {
        this.velocidade = this.velocidade + delta;
    }
}
let moto = new Moto('Ducati');
moto.Buzinar();
console.log(moto.velocidade);
moto.Acelerar(30);
console.log(moto.velocidade);
class Objeto2D {
    constructor() {
        this.base = 0;
        this.altura = 0;
    }
}
class Retangulo extends Objeto2D {
    area() {
        return this.base * this.altura;
    }
}
let retangulo = new Retangulo();
retangulo.base = 5;
retangulo.altura = 7;
console.log(retangulo.area());
class Estagiario {
    constructor() {
        this._primeiroNome = "";
    }
    get primeiroNome() {
        return this._primeiroNome;
    }
    set primeiroNome(valor) {
        if (valor.length >= 3) {
            this._primeiroNome = valor;
        }
        else {
            this._primeiroNome = '';
        }
    }
}
let estagiario = new Estagiario();
console.log(estagiario.primeiroNome);
estagiario.primeiroNome = 'Le';
console.log(estagiario.primeiroNome);
estagiario.primeiroNome = 'Leonardo';
console.log(estagiario.primeiroNome);
//# sourceMappingURL=desafio.js.map