//import { areaCircuferencia } from "./circuferencia"; sem default 
import  areaCircuferencia  from "./circuferencia"; //com default //import modulos padrao ES6 ainda precisa de web pack ou systemjs o navegador nao reconhece por padrao
console.log(areaCircuferencia(7));

console.log("teste");

const {digaTeste} = require('./novo') //import Modulo padaro common js ainda precisa de web pack ou systemjs o navegador nao reconhece por padrao
console.log(digaTeste(" Ana"))