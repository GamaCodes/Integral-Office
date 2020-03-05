CREDIT

fecha: String,
proveedor: String,
descripcion: String,
numCredito: Number,
semanas: Number,
monto: Number

PAYMENT
fecha: String,
tipo: String,
numCredito: Number,
descripcion: String,
monto: Number
fecha: String,


PURCHASE
tipo: String,
concepto: String,
descripcion: String,
cantidad: Number

SALE
fecha: String,
tipo: String,
factura: String,
cliente: String,
producto: String,
cantidad: Number,
descuento: Number,
monto: Number

SUPPLIE
codigo: String,
tipo:{
["Cable", "Terminal", "Conector", "Clavija", "Tomacorriente", "Cinta", 
"Tubo", "Etiqueta", "Plastico", "Protector", "Cintillo", "Bolsa", "Sensor", 
"Funda", "Arrancador", "Fusible", "Sello"]
},
descripcion: String,
proveedor: String,
codProv: String,
unidadMed:{
    enum:["Gramos","Kilos","Litros","Metros","Pieza","Piezas","Otro"]
},
precioUnit: Number,
actComer: {
["Nacional", "Importado"]
},
moneda: {
["MXN", "DLLS"]
},
gastosImp: {
["SI", "NO"]
},
cantAlmacen: Number,
modEmpaque: String,
codMppProv: String,
cantMinima: Number,
tiempoEntrega: Number,
periodoOrdenar: String,

