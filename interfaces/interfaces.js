"use strict";
function testeSeiLa(pessoa) {
    console.log('ola ' + pessoa.nome);
}
/*function alterarNome(pessoa: { nome: Pessoa}){
   // pessoa.nome = 'josefina'
}*/
const pessoa = {
    nome: 'jose',
    idade: 35,
    saudar(sobrenome) {
        console.log('teste ' + this.nome + " " + sobrenome);
    }
};
//testeSeiLa(pessoa)
//alterarNome(pessoa)
//testeSeiLa(pessoa)
pessoa.saudar("das couves junior");
class Cliente {
    constructor() {
        this.nome = '';
    }
    saudar(sobrenome) {
        console.log('cliente ' + this.nome + " " + sobrenome);
    }
}
const clinete = new Cliente();
clinete.nome = 'Judsclei';
//testeSeiLa(clinete)
clinete.saudar("credston ");
//subtrair = (n1:number, n2:number)=> n1-n2
let potencia;
potencia = (base, exp) => Math.pow(base, exp);
console.log(potencia(2, 8));
class RealA {
    a() { }
}
Object.prototype.log = function () {
    console.log(this.toString());
};
const x = 2;
const y = 3;
const z = 4;
x.log();
y.log();
z.log();
const cli = {
    nome: 'jose',
    toString() {
        return this.nome;
    }
};
cli.log();
//# sourceMappingURL=interfaces.js.map