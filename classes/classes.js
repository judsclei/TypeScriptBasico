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
//# sourceMappingURL=classes.js.map