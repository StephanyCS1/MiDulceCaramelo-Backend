const Cotizaciones = require("../models/Cotizaciones");

//crear datos
const cotizSave = async (req, res) => {
    try {
        const cotizacion = new Cotizaciones(req.body);
        await cotizacion.save();
        res.send("Cotizacion guardada");
    } catch (error) {
        console.error(error);
    }
};

//listar datos
const cotizList = async (req, res) => {
    try {
        const listCotizaciones = await Cotizaciones.find();
        res.status(200).send(listCotizaciones);
    } catch (error) {
        console.error(error);
    }
}

//find por id
const cotizId = async (req, res) => {
    try {
        const id = req.params.id;
        if (id) {
            const cotizaciones = await Cotizaciones.findById(id);
            res.status(200).send(cotizaciones);
        } else {
            res.send("No se puede tramitar la petición");
        }
    } catch (error) {
        console.error(error);
    }
};

const cotizMod = async (req, res) => {
    const { id } = req.params;
    Cotizaciones.findByIdAndUpdate(
        { _id: id },
        req.body,
        { new: true },
        (err, cotizaciones) => {
            if (err) res.send(err);
            res.status(200).send(cotizaciones);
        }
    );
};

const cotiDel = async (req, res) => {
    const id = req.params.id;
    Cotizaciones.findByIdAndRemove(id, (err, cotizaciones) => {
        if (err) {
            return res.status(200).send(cotizaciones);
            res.send("Cotizacion eliminada");
        } else {
            return res.json(cotizaciones);
        }
    })
};

module.exports = {
    cotizSave,
    cotizList,
    cotizId,
    cotizMod,
    cotiDel
}; 
