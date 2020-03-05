const router = require('express').Router();
const Credit = require('../models/Credit');

router.get('/', async (req, res, next) => {
    const credits = await Credit.find().sort({createdAt: -1})
    res.status(200).json({credits})
})

router.post('/create', async (req, res, next) => {
    const { fecha, proveedor, descripcion, numCredito, semanas, monto } = req.body
    const credit = await Credit.create({fecha, proveedor, descripcion, numCredito, semanas, monto})
    res.status(201).json({credit})
})

router.patch('/edit/:id', async (req, res, next) => {
    const {fecha, proveedor, descripcion, numCredito, semanas, monto} = req.body
    const {id} = req.params
    const credit = await Credit.findByIdAndUpdate(id, {fecha, proveedor, descripcion, numCredito, semanas, monto})
        .catch(err => res.status(500).json(err))
    res.status(200).json({credit})
})

router.delete('/delete/:id', async (req, res, next) => {
    const {id} = req.params
    await Credit.findByIdAndDelete(id)
    res.status(200).json({msg:"Credito eliminado"})
})

module.exports = router;

