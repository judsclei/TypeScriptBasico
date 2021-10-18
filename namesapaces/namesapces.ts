/// <reference path ="geometriaCirc.ts" />
namespace Areas{
    const PI = 3.14

   export function areaCircuferencia(raio:number):number {
        return PI * Math.pow(raio,2)
    }
}

console.log(Areas.areaCircuferencia(10))