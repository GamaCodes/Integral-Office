const { Schema, model } = require('mongoose');

const creditSchema = new Schema (
{
    fecha: String,
    proveedor: String,
    descripcion: String,
    numCredito: Number,
    semanas: Number,
    monto: Number
},
{
    timestamps: true,
    versionKey: false
  }
);

module.exports = model('Credit', creditSchema);