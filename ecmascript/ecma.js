"use strict";
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
//# sourceMappingURL=ecma.js.map