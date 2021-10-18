"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
//@logarClasse
//@logarClasseSe(true)
//@imprimivel
//@decorator ('teste', 123456)
//@logarObjeto
let Eletrodomestico = class Eletrodomestico {
    constructor() {
        console.log('teste.....');
    }
};
Eletrodomestico = __decorate([
    perfilAdmin
], Eletrodomestico);
function logarClasse(construtor) {
    console.log(construtor);
}
function decoratorEmpty(_) { }
function logarClasseSe(valor) {
    return valor ? logarClasse : decoratorEmpty;
}
// outra maenira com factory pode-se utilizar objects e objetos array e demais tiposd alem de funçoes e classes .....
function decorator(a, b) {
    return function (_) {
        console.log(a + '' + b);
    };
}
function logarObjeto(construtor) {
    return class extends construtor {
        constructor(...args) {
            console.log('Antes.... teste');
            super(...args);
            console.log('depois.....');
        }
    };
}
//utilizando o decorator em prototipos
function imprimivel(constructor) {
    constructor.prototype.imprimir = function () {
        console.log(this);
    };
}
//const eletro = new Eletrodomestico()
//eletro.imprimir && eletro.imprimir()
// Desafio Decorator perfilAdmin
const usuarioLogado = {
    nome: 'Guilherme Filho',
    email: 'guigui@gmail.com',
    admin: false
};
class MudancaAdministrativa {
    critico() {
        console.log('Algo crítico foi alterado!');
    }
}
new MudancaAdministrativa().critico();
function perfilAdmin(construtor) {
    return class extends construtor {
        constructor(...args) {
            super(...args);
            if (!usuarioLogado || !usuarioLogado.admin) {
                throw new Error("O usuario nao tem permiçao para acessar");
            }
        }
    };
}
// decorator associado ao metodo 
class ContaCorrente {
    constructor(saldo) {
        this.saldo = saldo;
    }
    sacar(valor) {
        if (valor <= this.saldo) {
            this.saldo -= valor;
            return teste;
        }
        else {
            return false;
        }
    }
    getSaldo() {
        return this.saldo;
    }
}
__decorate([
    naoNegativo
], ContaCorrente.prototype, "saldo", void 0);
__decorate([
    congelar,
    __param(0, infoParam)
], ContaCorrente.prototype, "sacar", null);
__decorate([
    congelar
], ContaCorrente.prototype, "getSaldo", null);
const cc = new ContaCorrente(10248.57);
cc.sacar(5000);
console.log(cc.getSaldo());
// decorato de metodo
function congelar(alvo, nomePropiedade, descriptor) {
    console.log(alvo);
    console.log(nomePropiedade);
    descriptor.writable = false;
}
//decorator de atributo 
function naoNegativo(alvo, nomePropiedade) {
    delete alvo[nomePropiedade];
    Object.defineProperty(alvo, nomePropiedade, {
        get: function () {
            return alvo["_" + nomePropiedade];
        },
        set: function (valor) {
            if (valor < 0) {
                throw new Error("Saldo invalido");
            }
            else {
                alvo["_" + nomePropiedade] = valor;
            }
        }
    });
}
//decoprator de parametro 
function infoParam(alvo, nomePropiedade, indiceParam) {
    console.log(`Alvo: ${alvo} - Metodo: ${nomePropiedade} - Indice Param: ${indiceParam}`);
}
//# sourceMappingURL=decorator.js.map