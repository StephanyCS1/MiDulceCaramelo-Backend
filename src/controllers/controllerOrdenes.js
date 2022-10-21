const app = require('../../app');
const Orden = require('../models/Ordenes');

const ordenSave = async (res, req) => {
    try {
        const orden = new Orden(req.body);
        await orden.save();
        res.send("Información de orden guardada");
    } catch (error) {
        console.error(error);
    }
};



const ordenList = async (res, req) => {
    try {
        const listOrden = await Orden.find();
        res.status(200).send(listOrden);
    } catch (error) {
        console.error(error);
    }
};


const ordenId = async (req, res) => {
    try {
        const id = req.params.id;
        if (id) {
            const orden = await Orden.findById(id);
            res.status(200).send(orden);
        } else {
            res.send("No se puede tramitar la petición");
        }
    } catch (error) {
        console.error(error);
    }
};

const ordenMod = async (req, res) => {
    const { id } = req.params;
    Orden.findByIdAndUpdate(
        { _id: id },
        req.body,
        {new: true},
        (err, ordenes) => {
            if (err) res.send(err);
            res.status(200).send(ordenes);
        }
    );
};

const ordenDel = async (req, res) => {
    const id = req.params.id;
    Orden.findByIdAndRemove(id, (err, ordenes) => {
        if (err) {
            return res.status(200).send(ordenes);
            res.send("Orden eliminada");
        } else {
            return res.json(ordenes);
        }
    })
};
module.exports = {
    ordenSave,
    ordenDel,
    ordenId,
    ordenList,
    ordenMod
}

