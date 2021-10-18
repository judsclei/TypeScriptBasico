class Moto {
    constructor(public nomeMoto:string, public velocidade: number =0) {
        this.nomeMoto = nomeMoto
        this.velocidade = velocidade    
    }
    public Buzinar(): void 
    {
        console.log('Toooooooooot!') ;
    }
    public Acelerar(delta:number): void 
    {
        this.velocidade=this.velocidade+delta     
    }
}
let moto = new Moto ('Ducati');
moto.Buzinar()
console.log(moto.velocidade)
moto.Acelerar(30)
console.log(moto.velocidade)

abstract class Objeto2D {
    public base: number =0
    public altura: number =0
    abstract area():number
}
class Retangulo extends Objeto2D {

    public area():number
    {
        return this.base * this.altura
    }
}
let retangulo = new Retangulo()
retangulo.base = 5
retangulo.altura = 7
console.log(retangulo.area())

class Estagiario
{
    private _primeiroNome: string =""

    get primeiroNome()
    {
        return this._primeiroNome
    }
    set primeiroNome(valor){
        if (valor.length >= 3) {
            this._primeiroNome = valor
        } else {
            this._primeiroNome = ''
        }
    }
}
let estagiario = new Estagiario()
console.log(estagiario.primeiroNome)
estagiario.primeiroNome = 'Le'
console.log(estagiario.primeiroNome)
estagiario.primeiroNome = 'Leonardo'
console.log(estagiario.primeiroNome)
