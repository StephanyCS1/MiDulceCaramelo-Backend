const app = require("./app.js");
var port = 4000;
const mongo = require("./database");
const rutasAdm = require("./src/routers/Adm.routes");
const rutasOrd = require("./src/routers/Ord.routes");
const rutasProducto = require("./src/routers/Prod.routes");

app.listen(port, () =>{
    console.log("Servidor conectado en: " + port);
});

app.get('/', (req, res) =>{
    res.send("Hola soy la API de MiDulceCaramelo");
});

//config rutas

app.use("/Adm", rutasAdm);
app.use("/Orden", rutasOrd);
app.use("/Productos", rutasProducto);
