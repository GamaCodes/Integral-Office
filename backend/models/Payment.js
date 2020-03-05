const { Schema, model } = require('mongoose');

const paymentSchema = new Schema (
{
    fecha: String,
    tipo: String,
    numCredito: Number,
    descripcion: String,
    monto: Number
},
{
    timestamps: true,
    versionKey: false
  }
);

module.exports = model('Payment', paymentSchema);