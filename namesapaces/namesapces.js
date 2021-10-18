"use strict";
/// <reference path ="geometriaCirc.ts" />
var Areas;
(function (Areas) {
    const PI = 3.14;
    function areaCircuferencia(raio) {
        return PI * Math.pow(raio, 2);
    }
    Areas.areaCircuferencia = areaCircuferencia;
})(Areas || (Areas = {}));
console.log(Areas.areaCircuferencia(10));
//# sourceMappingURL=namesapces.js.map