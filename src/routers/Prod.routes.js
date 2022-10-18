const { Router }  = require('express');
const routerProd = Router();
const controllerProd = require('../controllers/controllerProduc');

routerProd.get('/',  (req, res) =>{
    res.send("Soy una prueba de la ruta de producto");
});

routerProd.post('/new', controllerProd.prodSave);
routerProd.get('/list', controllerProd.listProd);
routerProd.get('/find/:id', controllerProd.prodId);
routerProd.delete('del/:id', controllerProd.prodDel);
routerProd.put('/act/:id', controllerProd.prodMod)

module.exports = routerProd;