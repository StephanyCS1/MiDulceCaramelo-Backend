const { Router } = require('express');
const routerOrden = Router();
const controllerOrden = require('../controllers/controllerOrdenes');


routerOrden.get("/", (req, res) => {
    res.send("Soy una prueba de la ruta de info envio");
});

routerOrden.post("/new", controllerOrden.ordenSave);
routerOrden.get("/list", controllerOrden.ordenList);
routerOrden.get("/find/:id", controllerOrden.ordenId);
routerOrden.delete("/del/:id", controllerOrden.ordenDel);
routerOrden.put("/act/:id", controllerOrden.ordenMod)


module.exports = routerOrden;