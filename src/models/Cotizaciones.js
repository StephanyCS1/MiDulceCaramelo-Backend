const mongo = require('mongoose');

const cotizacion = new mongo.Schema(
    {
        cantidad: {
            type: Number,
            required: true
        },
        idProd: {
            type: String,
            required: true
        }
    },
    {
        timestamps: true,
        versionKey: false
    }
);

const Cotizacion = mongo.model('Cotizacion', cotizacion);
module.exports = Cotizacion;