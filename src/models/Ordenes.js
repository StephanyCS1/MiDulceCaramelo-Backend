const mongo = require('mongoose');

const ordenes = new mongo.Schema(
    {
        address: {
            type: String,
            required: true
        },
        city: {
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
        arryProd: [
            {
                idProd: {
                    type: String,
                    required: true,
                    unique: true
                },
                category: {
                    type: Boolean,
                    required: true
                },
                descri: {
                    type: String,
                    required: true
                },
                img: {
                    type: String,
                    required: true
                },
                name: {
                    type: String,
                    required: true
                },
                price:
                {
                    type: Number,
                    required: true
                }
            }
        ],
        orderId: {
            type: String,
            required: true
        }
    },
    {
        collection: 'orden',
        timestamps: true,
        versionKey: false
    }
);

const Orden = mongo.model('orden', ordenes);
module.exports = Orden;