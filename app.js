const express = require("express");
const app = express();
const path = require("path");
const ruta = path.resolve(__dirname);

app.use(express.static(path.join(ruta, "/public")));

app.listen(3000, () => {
  console.log("Servidor corriendo en el puerto 3000");
});
