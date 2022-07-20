require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { dbConnection } = require("./database/config");
const path = require("path");
// Crear el servidor de express
const app = express();

// Configurar CORS
app.use(cors());

var whitelist = ["http://localhost", "http://localhost:3000"];
var corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
};

//Carpeta publoc

app.use("/", express.static("client", { redirect: false }));

app.use(express.static("public"));

//lectura y paseo del body
app.use(express.json());
// Base de datos
dbConnection();

// Rutas
app.use("/api/usuarios", require("./routes/usuarios"));
app.use("/api/ciclos", require("./routes/ciclos"));
app.use("/api/grados", require("./routes/grados"));
app.use("/api/grupos", require("./routes/grupos"));
app.use("/api/documentos", require("./routes/documentos"));
app.use("/api/documentos-entregados", require("./routes/documentosEntregados"));
app.use("/api/sexos", require("./routes/sexos"));
app.use("/api/parentescos", require("./routes/parentescos"));
app.use("/api/tipoSanguineos", require("./routes/tipoSanguineos"));
app.use("/api/alumnos", require("./routes/alumnos"));
app.use("/api/maestros", require("./routes/maestros"));
app.use("/api/materias", require("./routes/materias"));
app.use("/api/roles", require("./routes/roles"));
app.use("/api/cursos", require("./routes/cursos"));
app.use("/api/padres", require("./routes/padres"));
app.use("/api/login", require("./routes/auth"));
app.use("/api/search", require("./routes/busquedas"));
app.use("/api/upload", require("./routes/uploads"));
app.get("*", function (req, res, next) {
  res.sendFile(path.resolve("client/index.html"));
});
app.listen(process.env.PORT, () => {
  console.log(
    "__________________________________________________________________________________________________"
  );
  console.log(
    "__________________________________________________________________________________________________"
  );
  console.log("Servidor corriendo en puerto " + process.env.PORT);
});