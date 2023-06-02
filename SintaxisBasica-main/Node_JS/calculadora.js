//Importacion normal

const calculadora = require("./moduloExport.js")
console.log(calculadora.sumar(3,3))
console.log(calculadora.restar(10,5))

// Importacion con deconstruccion

const {sumar,restar} = require("./moduloExport.js")
console.log("la suma es = "+sumar(6,3))
console.log("la resta es = "+restar(3,10))