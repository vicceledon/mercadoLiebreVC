const express = require("express");
const app = express();
const path = require("path");
const ruta = path.resolve(__dirname);
const PORT = process.env.PORT || 4001;

app.use(express.static(path.join(ruta, "/public")));

app.listen(PORT, () => {
  console.log("Servidor corriendo en el puerto 3000");
});

app.get("/", (req, res) => {
  res.sendFile(path.join(ruta, "views/home.html"));
});
app.get("/login.html", (req, res) => {
  res.sendFile(path.join(ruta, "views/login.html"));
});
app.get("/register.html", (req, res) => {
  res.sendFile(path.join(ruta, "views/register.html"));
});
