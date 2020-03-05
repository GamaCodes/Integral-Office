const { Schema, model } = require('mongoose');

const supplieSchema = new Schema (
{
    codigo: String,
    tipo:{
      type:String,
      required: true,
      enum:["Cable", "Terminal", "Conector", "Clavija", "Tomacorriente", "Cinta", 
      "Tubo", "Etiqueta", "Plastico", "Protector", "Cintillo", "Bolsa", "Sensor", 
      "Funda", "Arrancador", "Fusible", "Sello"]
    },
    descripcion: String,
    proveedor: String,
    codProv: String,
    unidadMed:{
      type:String,
      required: true,
      enum:["Gramos","Kilos","Litros","Metros","Pieza","Piezas","Otro"]
    },
    precioUnit: Number,
    actComer: {
      type:String,
      required: true,
      enum:["Nacional", "Importado"]
    },
    moneda: {
      type:String,
      required: true,
      enum:["MXN", "DLLS"]
    },
    gastosImp: {
      type:String,
      enum:["SI", "NO"]
    },
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