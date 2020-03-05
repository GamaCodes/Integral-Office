const { Schema, model } = require('mongoose');

const purchaseSchema = new Schema (
{
    fecha: String,
    tipo: String,
    concepto: String,
    descripcion: String,
    cantidad: Number
},
{
    timestamps: true,
    versionKey: false
  }
);

module.exports = model('Purchase', purchaseSchema);