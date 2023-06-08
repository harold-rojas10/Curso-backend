const http = require('http');

const PUERTO = 3000;

const server = http.createServer((req, res) => {
    //Funciones request
    const url = req.url;
    const method = req.method;
    console.log('url:',url)
    console.log('Método:',method)
    //funciones de response
    res.statusCode = 200
    res.setHeader("Content-Type", "text/html")
    res.write("<h1>Hola mundo<h1>")
    res.write("<h2>Hola este es mi primer servidor<h2>")
    res.on('finish', () => {
        console.log('La respuesta se ha enviado completamente.');
    });
    res.end("<p>Esta es la respuesta final<p>")

})

server.listen(PUERTO,()=>{
    console.log(`El servidor está corriendo en http://localhost:${PUERTO}`)
})