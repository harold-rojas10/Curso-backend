//mezclar arreglos
function mezclar(){
    const numeros = [1,2,3,4,5,6,7,8,9,10]
    const {shuffle} = require('loadsh')
    const numerosMezclados = shuffle(numeros)
    console.log('Arreglo original:',numeros)
    console.log('Arreglo mezclado',numerosMezclados)
}

mezclar()

//divir un arreglos
function dividirArreglo(){
    const numeros = [1,2,3,4,5,6,7,8,9]
    const {chunk} = require('loadsh')
    const numerosDivididos = chunk(numeros,3)
    console.log('Arreglo original:',numeros)
    console.log('Arreglo divididos',numerosDivididos [0])
    console.log('Arreglo divididos',numerosDivididos [1])
    console.log('Arreglo divididos',numerosDivididos [2])
}
dividirArreglo()

//filtre unicos

function filtrarUnicos(){
    const numeros = [1,2,3,4,2,6,7,3,7]
    const {uniq} = require('loadsh')
    const numerosUnicos = uniq(numeros)
    console.log('Arreglo original:',numeros)
    console.log('Arreglo unicos',numerosUnicos)
}

filtrarUnicos()