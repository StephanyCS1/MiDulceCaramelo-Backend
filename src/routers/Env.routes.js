const { Router } = require('express');
const routerEnvio = Router();
const controllerEnvio = require('../controllers/controllerEnvios');


routerEnvio.get("/", (req, res) => {
    res.send("Soy una prueba de la ruta de info envio");
});

routerEnvio.post("/new", controllerEnvio.envioSave);
routerEnvio.get("/list", controllerEnvio.envioList);
routerEnvio.get("/find/:id", controllerEnvio.envioId);
routerEnvio.delete("/del/:id", controllerEnvio.envioDel);
routerEnvio.put("/act/:id", controllerEnvio.envioMod)


module.exports = routerEnvio;