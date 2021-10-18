//@logarClasse
//@logarClasseSe(true)
//@imprimivel
//@decorator ('teste', 123456)
//@logarObjeto
@perfilAdmin


class Eletrodomestico {
    constructor()
    {
        console.log('teste.....')
    }
}

interface Eletrodomestico{ // verifica se o a classe possui o metodo assim evitando erro no decorator 
    imprimir?():void
}
function logarClasse(construtor:Function) {
    console.log(construtor)
}
function decoratorEmpty(_: Function){}
function logarClasseSe(valor:boolean) {
    return valor ? logarClasse: decoratorEmpty
}

// outra maenira com factory pode-se utilizar objects e objetos array e demais tiposd alem de funçoes e classes .....
function decorator(a: string, b:number) {
    return function (_: Function): void {
        console.log(a + '' + b)
    }   
}
// construtor exetrmemente generico
type Construtor = { new (...args: any[]): {}}

function logarObjeto(construtor:Construtor) {
    return class extends construtor {
        constructor(...args:any[]){
            console.log('Antes.... teste')
            super(...args)
            console.log('depois.....')
        }
    }
}


//utilizando o decorator em prototipos
function imprimivel(constructor:Function) {
    constructor.prototype.imprimir = function(){
        console.log(this)
    }
}
//const eletro = new Eletrodomestico()
//eletro.imprimir && eletro.imprimir()

// Desafio Decorator perfilAdmin

const usuarioLogado = {
    nome: 'Guilherme Filho',
    email: 'guigui@gmail.com',
    admin: false
}
 
class MudancaAdministrativa {
    critico() {
        console.log('Algo crítico foi alterado!')
    }
}
 
new MudancaAdministrativa().critico()

function perfilAdmin<T extends Construtor>(construtor:T) {
    return class extends construtor {
        constructor(...args:any[]){
            super(...args)
            if(!usuarioLogado || !usuarioLogado.admin)
            {
                throw new Error("O usuario nao tem permiçao para acessar");
            }
        }
    }
}
// decorator associado ao metodo 
class ContaCorrente 
{
    @naoNegativo
    private saldo:number
    constructor(saldo: number){
        this.saldo = saldo
    }
    @congelar
    sacar(@infoParam valor:number )
    {
        if(valor <= this.saldo){
            this.saldo -= valor
            return teste
        }else{
            return false
        }
    }
    @congelar
    getSaldo()
    {
        return this.saldo
    }
}

const cc = new ContaCorrente(10248.57)
cc.sacar(5000)
console.log(cc.getSaldo())
// decorato de metodo
function congelar(alvo:any, nomePropiedade:string,descriptor: PropertyDescriptor)
{
    console.log(alvo)
    console.log(nomePropiedade)
    descriptor.writable = false
}
//decorator de atributo 
function naoNegativo(alvo:any, nomePropiedade:string) {
    delete alvo[nomePropiedade]
    Object.defineProperty(alvo,nomePropiedade,{
        get:function (): any {
            return alvo["_" + nomePropiedade]
        },
        set: function(valor:any) {
            if(valor<0){
                throw new Error("Saldo invalido");
                
            }
            else 
            {
                alvo["_" + nomePropiedade] = valor
            }
        }
    })
}
//decoprator de parametro 
function infoParam(alvo:any, nomePropiedade:string, indiceParam: number) {
    console.log(`Alvo: ${alvo} - Metodo: ${nomePropiedade} - Indice Param: ${indiceParam}`)
}