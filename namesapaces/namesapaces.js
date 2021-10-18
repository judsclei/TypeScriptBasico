"use strict";
class Data {
    constructor(dia = 1, mes = 1, ano = 1970) {
        this.dia = dia;
        this.mes = mes;
        this.ano = ano;
    }
}
const aniversario = new Data(15, 1, 1965);
console.log(aniversario.dia);
console.log(aniversario.mes);
const casmento = new Data;
console.log(casmento);
class Produto {
    constructor(nome, preco, desconto = 0) {
        this.nome = nome;
        this.preco = preco;
        this.desconto = desconto;
    }
    resumo() {
        return `${this.nome} custa R$ ${this.precoComDesconto()} com ${this.desconto}`;
    }
    precoComDesconto() {
        return (this.preco - ((this.desconto * this.preco) / 100));
    }
}
const produto = new Produto("josefino teste", 15, 10);
const produto1 = new Produto("josefina teste", 15.73, 1);
console.log(produto);
console.log(produto.resumo());
console.log(produto1);
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
let teste = 'teste';
let testi = 1596357;
//teste = testi
console.log(teste);
function soma(a, b) {
    return a + b;
}
function saudar(isManha) {
    let saudacao;
    if (isManha) {
        saudacao = "bom dia!";
    }
    else {
        saudacao = "sei la";
    }
    return saudacao;
}
// Arrow Functions
function somar(n1, n2) {
    return n1 + n2;
}
console.log(somar(2, 2));
const subtrair = (n1, n2) => n1 - n2; // se nao tiver chaves nao se pode colocar retorno 
console.log(subtrair(5, 78));
// Arrow sem paramentro
const saudacao = () => console.log("teste");
saudacao();
//com somente um parametro
const falarCom = (pessoa) => console.log("oi" + pessoa);
falarCom("ze das couves da silva");
// this
/*function normalThis()
{
    console.log (this);
}
// o this em js pode variar dependendo do contexto
const normalThisEspecial = normalThis.bind("teste12345456") //o parametro vai ser sado na fuçao como sendo o dele
normalThisEspecial();
const arrowUsandoThis =() =>console.log(this)
arrowUsandoThis() //ira retornar o ultimo valor de this ou seja o objeto da funçao anterios um ojeto padro tipo um window{...}*/
// Rest & Spread
const numbers = [963, 15, 15, 62, 84, 6656, 12131]; //oprado spread (...)
console.log(Math.max(...numbers));
function args(...args) {
    return args;
}
console.log(args(...numbers)); // ex spread
//sread rest (tupla)
const tupla = [1, "teste", false];
function tuplaParans1(a, b, c) {
    console.log(`1) ${a},${b},${c}`);
}
tuplaParans1(...tupla);
function tuplaParam3(...params) {
    console.log(`2) ${params[0]},${params[1]},${params[2]}`);
}
tuplaParam3(...tupla);
//destructurin 
const caracteristicas = ['motor', 2015];
const [motor, ano] = caracteristicas;
console.log(motor);
console.log(ano);
// operaçao ternaria parseInt(variavel) >9 ? '+9': variavel
// exercicio seçao 4
const dobro = (valor) => valor * 2;
console.log(dobro(11));
const dizerOla = (nome) => console.log(`Ola, ${!nome ? 'Pessoa' : nome}`);
dizerOla("Anna");
const nums = [-3, 33, 38, 5];
console.log(Math.min(...nums));
const array = [55, 20, ...nums];
console.log(array);
const notas = [8.5, 6.3, 9.4];
const [nota1, nota2, nota3] = notas;
console.log(nota1, nota2, nota3);
const cientista = { primeiroNome: "Will", experiencia: 12 };
const { primeiroNome, experiencia } = cientista;
console.log(primeiroNome, experiencia);
/*
//
//exemplo callback

function esperar3s(callback: (dado:string) => void){
    setTimeout(() => {
        callback('3 segundos de tempo depois')
    }, 3000)
}

esperar3s(function (response:string) {
    console.log(response)
})
//exemplo promisse
function esperarPromisse() {
    return new Promise((resolve:any) => {
        setTimeout(() => {
            resolve('3 segundos de tempo depois promisse')
        }, 3000)
    })
}

esperarPromisse().then(data=> console.log(data))

fetch('https://swapi.dev/api/people/1')
    .then(response => response.json()
        .then(personagem=> personagem.films)
            .then(films => fetch(films[0])))
                .then(resFilms => resFilms.json())
                    .then(filme =>console.log(filme))
                        .catch(err => console.log("error" + err))*/ 
let contaBancaria = {
    saldo: 3456,
    depositar(valor) {
        this.saldo += valor;
    }
};
let correntista = {
    nome: 'Ana Silva',
    contaBancaria: contaBancaria,
    contatos: ['34567890', '98765432']
};
correntista.contaBancaria.depositar(3000);
//console.log(correntista)
/// <reference path ="geometriaCirc.ts" />
var Areas;
(function (Areas) {
    const PI = 3.14;
    function areaCircuferencia(raio) {
        return PI * Math.pow(raio, 2);
    }
    Areas.areaCircuferencia = areaCircuferencia;
})(Areas || (Areas = {}));
console.log(Areas.areaCircuferencia(10));
//# sourceMappingURL=namesapaces.js.map