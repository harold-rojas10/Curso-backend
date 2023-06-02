//modulo de exportacion
//function sumar (num1,num2){
//return num1 + num2
//}
//module.exports.sumar = sumar

//modulo de exportacion
function sumar (num1,num2){
    return num1 + num2
}
function restar (num1,num2){
    return num1 - num2
}

module.exports = {
    sumar: sumar,
    restar:restar
}