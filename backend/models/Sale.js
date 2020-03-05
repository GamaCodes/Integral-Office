const { Schema, model } = require('mongoose');

const saleSchema = new Schema (
{
    fecha: String,
    tipo: String,
    factura: String,
    cliente: String,
    producto: String,
    cantidad: Number,
    descuento: Number,
    monto: Number
},
{
    timestamps: true,
    versionKey: false
  }
);

module.exports = model('Sale', saleSchema);