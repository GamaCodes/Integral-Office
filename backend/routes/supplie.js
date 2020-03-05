const router = require('express').Router();
const Supplie = require('../models/Supplie');

router.get('/', async (req, res, next) => {
    const supplies = await Supplie.find().sort({createdAt: -1})
    res.status(200).json({supplies})
})

router.post('/create', async (req, res, next) => {
    const {codigo, tipo, descripcion, proveedor, codProv, unidadMed, precioUnit, actComer, moneda, gastosImp, 
        cantAlmacen, modEmpaque, codMppProv, cantMinima, tiempoEntrega, periodoOrdenar} = req.body
    const supplie = await Supplie.create({codigo, tipo, descripcion, proveedor, codProv, unidadMed, precioUnit, 
        actComer, moneda, gastosImp, cantAlmacen, modEmpaque, codMppProv, cantMinima, tiempoEntrega, 
        periodoOrdenar})
    res.status(201).json({supplie})
})

router.patch('/edit/:id', async (req, res, next) => {
    const {codigo, tipo, descripcion, proveedor,codProv, unidadMed, precioUnit, actComer, moneda, gastosImp, 
        cantAlmacen, modEmpaque, codMppProv, cantMinima, tiempoEntrega, periodoOrdenar} = req.body
    const {id} = req.params
    const supplie = await Supplie.findByIdAndUpdate(id, {codigo, tipo, descripcion, proveedor, codProv, unidadMed, 
        precioUnit, actComer, moneda, gastosImp, cantAlmacen, modEmpaque, codMppProv, cantMinima, 
        tiempoEntrega, periodoOrdenar})
        .catch(err => res.status(500).json(err))
    res.status(200).json({supplie})
})

router.delete('/delete/:id', async (req, res, next) => {
    const {id} = req.params
    await Supplie.findByIdAndDelete(id)
    res.status(200).json({msg:"Insumo borrado"})
})

module.exports = router;

