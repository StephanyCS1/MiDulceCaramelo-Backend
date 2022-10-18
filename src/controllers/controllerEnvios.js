const Envio = require('../models/infoEnvios');

const envioSave = async (res, req) => {
    try {
        const envioInfo = new Envio(req.body);
        await envioInfo.save();
        res.send("Información de envio guardada");
    } catch (error) {
        console.error(error);
    }
};



const envioList = async (res, req) => {
    try {
        const listEnvio = await Envio.find();
        res.status(200).send(listEnvio);
    } catch (error) {
        console.error(error);
    }
};


const envioId = async (req, res) => {
    try {
        const id = req.params.id;
        if (id) {
            const envios = await Envio.findById(id);
            res.status(200).send(envios);
        } else {
            res.send("No se puede tramitar la petición");
        }
    } catch (error) {
        console.error(error);
    }
};

const envioMod = async (req, res) => {
    const { id } = req.params;
    Envio.findByIdAndUpdate(
        { _id: id },
        req.body,
        {new: true},
        (err, envios) => {
            if (err) res.send(err);
            res.status(200).send(envios);
        }
    );
};

const envioDel = async (req, res) => {
    const id = req.params.id;
    Envio.findByIdAndRemove(id, (err, envios) => {
        if (err) {
            return res.status(200).send(envios);
            res.send("Envio eliminado");
        } else {
            return res.json(envios);
        }
    })
};
module.exports = {
    envioSave,
    envioList,
    envioId,
    envioMod,
    envioDel
}