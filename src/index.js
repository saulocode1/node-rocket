const express = require("express");
const { v4: uuidv4 } = require("uuid"); // (v4 - números randômicos)

const app = express();

app.use(express.json());

const costumers = [];

/*
   cpf - string
   name - string
   id - uuid (universally unique identifier)
   statement - [] (extrato, créditos, débitos, etc)
*/

app.post("/account", (request, response) => {
   const { cpf, name } = request.body;

   const costumerAlreadyExists = costumers.some(
      // some - procura no array e retorna true se existir e false se não existir
      (costumer) => costumer.cpf === cpf
   );

   if (costumerAlreadyExists) {
      return response.status(400).json({ error: "Costumer already exists!" });
   }

   costumers.push({
      cpf,
      name,
      id: uuidv4(),
      statement: [],
   });

   return response.status(201).send(); // status 201 - quando algum dado for criado
});

app.get("/statement/:cpf", (request, response) => {
   const { cpf } = request.params;

   const costumer = costumers.find((costumer) => costumer.cpf === cpf); // find - achar e retornar dados

   return response.json(costumer.statement);
});

app.listen(3333);
