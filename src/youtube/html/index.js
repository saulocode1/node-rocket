const express = require("express");

const app = express();

app.get("/", (request, response) => {
   return response.sendFile(__dirname + "/index.html"); // dirname - retorna diretório raiz da aplicação
});

app.listen(3333);
