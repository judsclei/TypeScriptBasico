interface Pessoa 
{
    nome: string
    idade?:number
    [prop: string]: any // tipo dinamico para propriedade 
    saudar(sobrenome:string):void
}

function testeSeiLa(pessoa: { nome: Pessoa}){
    console.log('ola ' + pessoa.nome)
}
/*function alterarNome(pessoa: { nome: Pessoa}){
   // pessoa.nome = 'josefina'
}*/

const pessoa: Pessoa ={
    nome: 'jose',
    idade: 35,
    saudar(sobrenome: string):void
    {
        console.log('teste ' + this.nome+ " "+ sobrenome)
    }
}
//testeSeiLa(pessoa)
//alterarNome(pessoa)
//testeSeiLa(pessoa)
pessoa.saudar("das couves junior");

class Cliente implements Pessoa {
    nome: string = ''
    saudar(sobrenome: string):void
    {
        console.log('cliente ' + this.nome+ " "+ sobrenome)
    }
}

const clinete = new Cliente()
clinete.nome = 'Judsclei'
//testeSeiLa(clinete)
clinete.saudar("credston ")


//interface Funçao 
interface FuncaoCalculo
{
    (a:number, b:number):number
}
//subtrair = (n1:number, n2:number)=> n1-n2
let potencia: FuncaoCalculo
potencia = (base:number, exp:number) => base ** exp

console.log(potencia(2,8));

// Herança interfaces

interface A{
    a(): void
}
 interface B{
     b(): void
 }
 interface ABC extends A,B{ //extende duas interfaces assim como clases
    c():void
 }
 class RealA implements A // pode se implementar mais de uma interface des de que a mesma implemente todos os metodos obrigatorios 
 {
     a(): void{}
 }
// se for uma classe abstrta a implementaçao de todos os  metodos tambem deve ser obrigatoria 
// nao precisa ter o compo do metodo mas procisa ter a declaraçao 

interface Object
{
    log():void
}

Object.prototype.log = function () {
    console.log(this.toString())
}

const x =2
const y =3
const z= 4

x.log()
y.log()
z.log()

const cli ={
    nome:'jose',
    toString(){
        return this.nome
    }
}
cli.log();