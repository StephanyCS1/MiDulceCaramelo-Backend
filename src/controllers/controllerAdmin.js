const Administrador = require("../models/Administradores");

//crear datos
const admSave = async (req, res) => {
    try {
        const admin = new Cotizaciones(req.body);
        await admin.save();
        res.send("Admin guardado");
    } catch (error) {
        console.error(error);
    }
};

//listar datos
const admList = async (req, res) => {
    try {
        const listAdmins = await Administrador.find();
        res.status(200).send(listAdmins);
    } catch (error) {
        console.error(error);
    }
}


//find por id
const admId = async (req, res) => {
    try {
        const id = req.params.id;
        if (id) {
            const admin = await Administrador.findById(id);
            res.status(200).send(admin);
        } else {
            res.send("No se puede tramitar la petición");
        }
    } catch (error) {
        console.error(error);
    }
};

const admMod = async (req, res) => {
    const { id } = req.params;
    Administrador.findByIdAndUpdate(
        { _id: id },
        req.body,
        { new: true },
        (err, admin) => {
            if (err) res.send(err);
            res.status(200).send(admin);
        }
    );
};

const admDel = async (req, res) => {
    const id = req.params.id;
    Administrador.findByIdAndRemove(id, (err, cotizacionadmines) => {
        if (err) {
            return res.status(200).send(admin);
            res.send("Cotizacion eliminada");
        } else {
            return res.json(admin);
        }
    })
};

module.exports = {
    admDel,
    admMod,
    admSave,
    admList,
    admId
}; 
