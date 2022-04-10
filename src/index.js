/*
   cpf - string
   name - string
   id - uuid (universally unique identifier)
   statement - [] (extrato, créditos, débitos, etc)
*/

const express = require("express");
const { v4: uuidv4 } = require("uuid"); // (v4 - números randômicos)

const app = express();

app.use(express.json());

const costumers = [];

app.post("/account", (request, response) => {
   const { cpf, name } = request.body;

   const id = uuidv4();

   costumers.push({
      cpf,
      name,
      id,
      statement: [],
   });

   return response.status(201).send(); // status 201 - quando algum dado for criado
});

app.listen(3333);
