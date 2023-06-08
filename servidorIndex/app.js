const http = require('http');
const fs = require('fs')

const PUERTO = 3000;

const server = http.createServer((req, res) => {
    fs.readFile("./SintaxisBasica-main/index.html", "utf8", (error, data) => {
        if (error) {
            res.writeHead(500, { "Content-Type": "text/html" });
            res.end("<h1>Hay un error en el servidor<h1>");
        } else {
            res.writeHead(200, { "Content-Type": "text/html" });
            res.end(data);
        }
    });
})

server.listen(PUERTO, () => {
    console.log(`El servidor está corriendo en http://localhost:${PUERTO}`)
})