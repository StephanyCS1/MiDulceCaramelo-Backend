const mongo = require('mongoose');

const product = new mongo.Schema(
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
    },
    {
        collection: 'Product',
        timestamps: true,
        versionKey: false
    }

);
const Product = mongo.model('Product', product);
module.exports = Product;