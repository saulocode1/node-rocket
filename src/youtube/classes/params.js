const express = require("express");

const app = express();

app.get("/params/:position/:name/:age", (request, response) => {
   return response.send(
      "<h1>Hello " + request.params.name + "</h1>" +
      "<h2>Your position:  " + request.params.position + "</h2>" +
      "<h3> Your age: " + request.params.age + "</h3>"
   );
});

app.listen(3333);
