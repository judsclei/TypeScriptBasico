"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//import { areaCircuferencia } from "./circuferencia"; sem default 
const circuferencia_1 = __importDefault(require("./circuferencia")); //com default //import modulos padrao ES6 ainda precisa de web pack ou systemjs o navegador nao reconhece por padrao
console.log((0, circuferencia_1.default)(7));
console.log("teste");
const { digaTeste } = require('./novo'); //import Modulo padaro common js ainda precisa de web pack ou systemjs o navegador nao reconhece por padrao
console.log(digaTeste(" Ana"));
//# sourceMappingURL=modulos.js.map