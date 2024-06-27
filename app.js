const express = require("express");
const path = require("path");
const app = express();
const port = 3000;

// Servir archivos estáticos
app.use(express.static("public"));

// Rutas
app.get("/", (req, res) => {
  res.sendFile(path.resolve("./views/home.html"));
});

app.post("/", (req, res) => {
  res.sendFile(path.resolve("./views/home.html"));
});

app.get("/register", (req, res) => {
  res.sendFile(path.resolve("./views/register.html"));
});

app.get("/login", (req, res) => {
  res.sendFile(path.resolve("./views/login.html"));
});

app.post("/ofertas", (req, res) => {
  //hacer algo
});

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
