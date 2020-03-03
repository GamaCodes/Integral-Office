const { Schema, model } = require('mongoose');

const cardSchema = new Schema (
{
    id: String,
    codigo: String,
    descripcion: String,
    codProveedor: String,
    unidadMed: String,
    precioUnit: Number,
    actComer: String,
    moneda: String,
    gastosImp: String,
    cantAlmacen: Number,
    modEmpaque: String,
    codMppProv: String,
    cantMinima: Number,
    tiempoEntrega: Number,
    periodoOrdenar: String,
    reqHistSemanal: String,
    semanasStock: Number
  },
{
    timestamps: true,
    versionKey: false
  }
);

module.exports = model('Card', cardSchema);