"use strict";
function echoG(objeto) {
    return objeto;
}
console.log(echoG('joao').length);
console.log(echoG(27));
function imprimir(obj) {
    console.log(obj);
}
imprimir(['Teste', 'test1', 'teste2']);
imprimir([
    { nome: 'jose', idade: 22 },
    { nome: 'joa', idade: 23 },
    { nome: 'zizinho', idade: 40 }
]);
imprimir([
    { nome: 'jose', idade: 22 },
    { nome: 'joa', idade: 23 },
    { nome: 'zizinho', idade: 40 }
]);
const chamaEcho = echoG;
console.log(chamaEcho('algumaCoisa'));
// classe usando o generics
class OperacaoBinaria {
    constructor(oparando1, operando2) {
        this.oparando1 = oparando1;
        this.operando2 = operando2;
    }
}
class Soma extends OperacaoBinaria {
    executar() {
        return this.oparando1 + this.operando2;
    }
}
console.log(new Soma(3, 7).executar());
class DiferencaDatas extends OperacaoBinaria {
    getTime(data) {
        let { dia, mes, ano } = data;
        return new Date(`${mes}/${dia}/${ano}`).getTime();
    }
    executar() {
        const t1 = this.getTime(this.oparando1);
        const t2 = this.getTime(this.operando2);
        const diferenca = Math.abs(t1 - t2);
        const dia = 100 * 60 * 60 * 24; //milisegundos de um dia
        return `${Math.ceil(diferenca / dia)} dias(s)`;
    }
}
const d1 = new Data(1, 2, 2021);
const d2 = new Data(1, 8, 2029);
console.log(new DiferencaDatas(d1, d2).executar());
class Fila {
    constructor(...elementos) {
        this.fila = elementos;
    }
    entrar(elemneto) {
        this.fila.push(elemneto);
    }
    proximo() {
        const primeiro = this.fila[0];
        this.fila.splice(0, 1);
        return primeiro;
    }
    imprimir() {
        console.log(this.fila);
    }
}
const fila = new Fila('teste1', 'teste2');
fila.imprimir();
fila.entrar('teste');
fila.imprimir();
fila.proximo();
fila.imprimir();
class Mapa {
    constructor() {
        this.mapa = new Array();
    }
    obter(chave) {
        const resultado = this.mapa.filter(i => i.chave === chave);
        return resultado ? resultado[0] : null;
    }
    colocar(val) {
        const encontrado = this.obter(val.chave);
        if (encontrado) {
            encontrado.valor = val.valor;
        }
        else {
            this.mapa.push(val);
        }
    }
    limpar() {
        this.mapa = new Array();
    }
    imprimir() {
        console.log(this.mapa);
    }
}
const mapa = new Mapa();
mapa.colocar({ chave: 1, valor: 'Pedro' });
mapa.colocar({ chave: 2, valor: 'Rebeca' });
mapa.colocar({ chave: 3, valor: 'Maria' });
mapa.colocar({ chave: 1, valor: 'Gustavo' });
console.log(mapa.obter(2));
mapa.imprimir();
mapa.limpar();
mapa.imprimir();
//# sourceMappingURL=generics.js.map