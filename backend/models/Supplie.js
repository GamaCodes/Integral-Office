const { Schema, model } = require('mongoose');

const supplieSchema = new Schema (
{
    codigo: String,
    tipo: String,
    descripcion: String,
    codProv: String,
    unidadMed:{
      type:String,
      required: true,
      enum:["Gramos","Kilos","Litros","Metros","Pieza","Piezas","Otro"]
    },
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
  },
{
    timestamps: true,
    versionKey: false
  }
);

module.exports = model('Supplie', supplieSchema);