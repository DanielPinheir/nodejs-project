const http = require("http");
const servidor = http.createServer(function (req, resp) {
  resp.end(`
        <html>
            <head>
                <meta charset="utf-8">
            </head>
            <body>
                <h1> Ultima School </h1>
            </body> 
        </html>
    `);
});
servidor.listen(8000, () => {
  console.log("Servidor inicializado na porta 8000");
});