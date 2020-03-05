const router = require('express').Router();
const Payment = require('../models/Payment');

router.get('/', async (req, res, next) => {
    const payments = await Payment.find().sort({createdAt: -1})
    res.status(200).json({payments})
})

router.post('/create', async (req, res, next) => {
    const { fecha, tipo, numCredito, descripcion, monto } = req.body
    const payment = await Payment.create({ fecha, tipo, numCredito, descripcion, monto })
    res.status(201).json({ payment })
})

router.patch('/edit/:id', async (req, res, next) => {
    const { fecha, tipo, numCredito, descripcion, monto } = req.body
    const {id} = req.params
    const payment = await Payment.findByIdAndUpdate(id, { fecha, tipo, numCredito, descripcion, monto })
        .catch(err => res.status(500).json(err))
    res.status(200).json({payment})
})

router.delete('/delete/:id', async (req, res, next) => {
    const {id} = req.params
    await Payment.findByIdAndDelete(id)
    res.status(200).json({msg:"Pago eliminado"})
})

module.exports = router;
