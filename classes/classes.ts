class Data {
    dia:number
    mes:number
    ano:number

    constructor(dia: number =1,mes:number =1,ano:number = 1970) {
        this.dia= dia;
        this.mes= mes;
        this.ano= ano;
        
    }
}

const aniversario = new Data(15,1,1965)
console.log(aniversario.dia)
console.log(aniversario.mes)

const casmento = new Data
console.log(casmento)

class Produto {
    constructor(public nome: string ,public preco:number,public desconto :number = 0) {

    }
    public resumo(): string
    {
        return `${this.nome} custa R$ ${this.precoComDesconto()} com ${this.desconto}`
    }
    public precoComDesconto(): number
    {
        return (this.preco- ((this.desconto*this.preco)/100))
    }

}
const produto = new Produto("josefino teste", 15,10)
const produto1 = new Produto("josefina teste", 15.73,1)
console.log(produto)
console.log(produto.resumo());
console.log(produto1)