const { Router } = require('express');
const routerAdm = Router();
const controllerAdm = require('../controllers/controllerAdmin');


routerAdm.get("/", (req, res) => {
    res.send("Soy una prueba de la ruta de admin");
});

routerAdm.post("/new", controllerAdm.admSave);
routerAdm.get("/list", controllerAdm.admList);
routerAdm.get("/find/:id", controllerAdm.admId);
routerAdm.delete("/del/:id", controllerAdm.admDel);
routerAdm.put("/act/:id", controllerAdm.admMod);


module.exports = routerAdm;