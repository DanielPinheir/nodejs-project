const express = require("express");
const rotas = require("./router");

const app = express();

rotas(app);

app.listen(8000, () => {
  console.log("Servidor inicializado na porta 8000...");
});
