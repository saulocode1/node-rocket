const express = require("express");

const app = express();

app.use(express.json()); // informar para express arquivo json

/*
   GET – Buscar uma informação no servidor
   POST – Inserir uma informação no servidor
   PUT – Alterar uma informação no servidor
   PATCH – Atualizar uma informação no específica	
   DELETE – Deletar uma informação no servidor
*/

/*
   Tipos de parâmetros:

   * Route Params => Identificar um recurso editar/deletar/buscar
   * Query Params => Paginação / Filtro 
   * Body Params => Os objetos para inserção/alteração (cadastro, update) [JSON]
*/

app.get("/courses", (request, response) => {
   const query = request.query; // paginação / url
   console.log(query);
   return response.json(["Curso 1", "Curso 2", "Curso 3"]);
});

app.post("/courses", (request, response) => {
   const body = request.body;
   console.log(body);
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
