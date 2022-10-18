const Productos = require("../models/Productos");

const prodSave = async (req, res) => {
    try {
        const producto = new Productos(req.body);
        await producto.save();
    } catch (error) {
        console.error(error);
    }
};

const listProd = async (req, res) => {
    try {
        const listProd = await Productos.find();
        res.status(200).send(listProd);
    } catch (error) {
        console.error(error);
    }
};

const prodId = async (req, res) => {
    try {
        const id = req.params.id;
        if (id){
            const produId = await Productos.findById(id);
            res.status(200).send(produId);
        }else{
            res.send("No se puede tramitar petición")
        }
    } catch (error) {
        console.error(error);
    }
};

const prodMod = async (req, res) => {
    const { id } = req.params;
    Productos.findByIdAndUpdate(
        { _id: id },
        req.body,
        { new: true },
        (err, productos) => {
            if (err) res.send(err);
            res.status(200).send(productos);
        }
    );
};

const prodDel = async (req, res) => {
    const id = req.params.id;
    Productos.findByIdAndRemove(id, (err, productos) => {
        if (err) {
            return res.status(200).send(productos);
            res.send("Producto eliminado");
        } else {
            return res.json(productos);
        }
    })
};

module.exports = {
    prodSave,
    prodId,
    listProd,
    prodMod,
    prodDel
};