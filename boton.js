//Obtener elementos del HTML con JQuery
let resultado = document.getElementById("resultado")
console.log(resultado)
let calcular = document.getElementById("calcular")
calcular.addEventListener("click", function () {
    
    let num1 = Number(valor1.value)
    let num2 = Number(valor2.value)
    let op = operacion.value
    let res
    switch (op) {
        case "+":
            res =  num1 + num2
            break;
        case "-":
            res =  num1 - num2
            break;
        case "*":
            res =  num1 * num2
            break;
        case "/":
            res =  num1 / num2
            break;
      case "%":
        res = num1%num2
        break;
      case "^":
        res = num1**num2
        break;
        default:
            break;
    }
    resultado.textContent = res;
})