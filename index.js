const app = require("./app.js");
var port = 4000;
const mongo = require("./database");
const rutasCotizacion = require("./src/routers/Cot.routes");
const rutasEnvio = require("./src/routers/Env.routes");
const rutasProducto = require("./src/routers/Prod.routes");

app.listen(port, () =>{
    console.log("Servidor conectado en: " + port);
});

app.get('/', (req, res) =>{
    res.send("Hola soy la API de MiDulceCaramelo");
});

//config rutas

app.use("/Cotizacion", rutasCotizacion);
app.use("/EnvioInfo", rutasEnvio);
app.use("/Productos", rutasProducto);
