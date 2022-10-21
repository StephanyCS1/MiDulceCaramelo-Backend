const mongo = require('mongoose');

const admin = new mongo.Schema(
    {
        idAdm: {
            type: String,
            required: true
        },
        user: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        },
        password: {
            type: String,
            required: true
        }
    },
    {
        collection: 'Administrador',
        timestamps: true,
        versionKey: false
    }
);

const Administrador = mongo.model('Administrador', admin);
module.exports = Administrador;