const mongo = require('mongoose');

const infoEnvio = new mongo.Schema(
    {
        address: { 
            type: String, 
            required: true 
        },
        city: { 
            type: String,  
            required: true 
        },
        date: { 
            type: String, 
            required: true 
        },
        lastName: { 
            type: String, 
            required: true 
        },
        nameUs: { 
            type: String, 
            required: true 
        },
        phone: { 
            type: String, 
            required: true 
        },
    },
    { 
        timestamps: true,
        versionKey: false
    }
);

const Envio = mongo.model('envio', infoEnvio);
module.exports = Envio;