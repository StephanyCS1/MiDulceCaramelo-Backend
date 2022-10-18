const { Router } = require('express');
const routerCotiz = Router();
const controllerCoti = require('../controllers/controllerCotizacion');


routerCotiz.get("/", (req, res) => {
    res.send("Soy una prueba de la ruta de cotización");
});

routerCotiz.post("/new", controllerCoti.cotizSave);
routerCotiz.get("/list", controllerCoti.cotizList);
routerCotiz.get("/find/:id", controllerCoti.cotizId);
routerCotiz.delete("/del/:id", controllerCoti.cotiDel);
routerCotiz.put("/act/:id", controllerCoti.cotizMod);


module.exports = routerCotiz;