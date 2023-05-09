// 1. Saludar
//   Pide el nombre en un mensaje de alerta
let nombre = prompt("Por favor, ingresa tu nombre:");
//   Muestra el nombre en un mensaje de alerta
alert("Hola " + nombre + ", bienvenido/a!");
let edad = prompt("Por favor ingrese su edad");
//   Muestra en consola la edad
console.log("Tienes " + edad + " años");
// 2. Operaciones
const PI = 3.14159; // Constante
//let radio = 5; // Variable
let radio = prompt("Escriba el radio")
let area = PI * radio ** 2; // Operador matemático y tipo de dato (número)
let esMayorQueDiez = area > 10; // Operador de comparación y operador lógico
let esMenorQueVeinte = area < 20; // Operador de comparación y operador lógico

console.log("El área del círculo es: " + area); // Imprimir resultado en consola
console.log("¿El área es mayor que 10? " + esMayorQueDiez); // Imprimir resultado en consola
console.log("¿El área es menor que 20? " + esMenorQueVeinte); // Imprimir resultado en consola