const express = require("express");

const app = express();

/*
   GET – Buscar uma informação no servidor
   POST – Inserir uma informação no servidor
   PUT – Alterar uma informação no servidor
   PATCH – Atualizar uma informação no específica	
   DELETE – Deletar uma informação no servidor

*/

/*
   Tipos de parâmetros:

   Route params => Identificar um recurso editar/deletar/buscar

*/

app.get("/courses", (request, response) => {
   return response.json(["Curso 1", "Curso 2", "Curso 3"]);
});

app.post("/courses", (request, response) => {
   return response.json(["Curso 1", "Curso 2", "Curso 3", "Curso 4"]);
});

app.put("/courses/:id", (request, response) => {
   const { id } = request.params;
   console.log(id);
   return response.json(["Curso 6", "Curso 2", "Curso 3", "Curso 4"]);
});

app.patch("/courses/:id", (request, response) => {
   return response.json(["Curso 6", "Curso 7", "Curso 3", "Curso 4"]);
});

app.delete("/courses/:id", (request, response) => {
   return response.json(["Curso 6", "Curso 7", "Curso 4"]);
});

app.listen(3333);
