
function echoG<T>(objeto: T) {
    return objeto 
}

console.log(echoG('joao').length)
console.log(echoG<number>(27))

function imprimir <T> (obj:T)
{
 console.log (obj)
}

imprimir<string[]>(['Teste','test1','teste2'])
imprimir<{nome: string, idade: number}[]>([
    {nome: 'jose', idade:22},
    {nome: 'joa', idade:23},
    {nome: 'zizinho', idade:40}
])

type Aluno = {nome: string, idade: number}
imprimir<Aluno[]>([
    {nome: 'jose', idade:22},
    {nome: 'joa', idade:23},
    {nome: 'zizinho', idade:40}
])

type Echo =<T>(data: T)=> T
const chamaEcho: Echo = echoG
console.log(chamaEcho<string>('algumaCoisa'))
// classe usando o generics
abstract class OperacaoBinaria<T, R> { //generic pode ser representato por qulaquer letra ou expreçao 
    constructor(public oparando1: T, public operando2: T) {
        
    }
    abstract executar(): R
}
class Soma extends OperacaoBinaria<number, number> {
    executar():number{
        return this.oparando1+ this.operando2
    }
}

console.log(new Soma(3,7).executar());

class DiferencaDatas extends OperacaoBinaria <Data, string> {
    getTime(data: Data): number {
        let {dia,mes,ano} = data
        return new Date(`${mes}/${dia}/${ano}`).getTime()
    }

    executar(): string
    {
        const t1 =this.getTime(this.oparando1)
        const t2 = this.getTime(this.operando2)
        const diferenca = Math.abs(t1-t2)
        const dia = 100 * 60 *60 *24  //milisegundos de um dia
        return `${Math.ceil(diferenca/dia)} dias(s)`
    }
}

const d1 =new Data(1,2,2021)
const d2 =new Data(1,8,2029)
console.log(new DiferencaDatas(d1,d2).executar())

class Fila <T> {  ///class Fila <T extends number>  <T extends number (pipe) string> e um exemplo de restriçao ou restricts
    private fila: Array<T>
    constructor(...elementos: T[]) {
        this.fila = elementos
    }
    entrar(elemneto:T)
    {
        this.fila.push(elemneto);
    } 
    proximo(): T{
        const primeiro = this.fila[0]
        this.fila.splice(0,1)
        return primeiro
    }
    imprimir()
    {
        console.log(this.fila)
    }
}
const fila = new Fila<string>('teste1','teste2');
fila.imprimir()
fila.entrar('teste')
fila.imprimir()
fila.proximo()
fila.imprimir()

class Mapa <T ,V > {
    mapa: Array<{chave:T, valor:V}> = new Array<{chave:T, valor:V}>()
    obter(chave: T): {chave:T, valor:V} | null
    {
        const resultado = this.mapa.filter(i=> i.chave === chave)
        return resultado ? resultado[0] : null
    }
    colocar(val: {chave:T, valor:V} )
    {
        const encontrado = this.obter(val.chave)
        if(encontrado)
        {
            encontrado.valor = val.valor
        }
        else
        {
            this.mapa.push(val)
        }
    }
    limpar()
    {
        this.mapa = new Array<{chave:T, valor:V}>()
    }
    imprimir()
    {
        console.log(this.mapa)
    }
}


const mapa = new Mapa<number, string>()
mapa.colocar({ chave: 1, valor: 'Pedro' })
mapa.colocar({ chave: 2, valor: 'Rebeca' })
mapa.colocar({ chave: 3, valor: 'Maria' })
mapa.colocar({ chave: 1, valor: 'Gustavo' })
 
console.log(mapa.obter(2))
mapa.imprimir()
mapa.limpar()
mapa.imprimir()