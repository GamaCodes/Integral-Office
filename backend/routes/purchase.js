const router = require('express').Router();
const Purchase = require('../models/Purchase');

router.get('/', async (req, res, next) => {
    const purchases = await Purchase.find().sort({createdAt: -1})
    res.status(200).json({purchases})
})

router.post('/create', async (req, res, next) => {
    const { fecha, tipo, concepto, descripcion, cantidad } = req.body
    const purchase = await Purchase.create({ fecha, tipo, concepto, descripcion, cantidad })
    res.status(201).json({ purchase })
})

router.patch('/edit/:id', async (req, res, next) => {
    const { fecha, tipo, concepto, descripcion, cantidad } = req.body
    const {id} = req.params
    const purchase = await Purchase.findByIdAndUpdate(id, { fecha, tipo, concepto, descripcion, cantidad })
        .catch(err => res.status(500).json(err))
    res.status(200).json({purchase})
})

router.delete('/delete/:id', async (req, res, next) => {
    const {id} = req.params
    await Purchase.findByIdAndDelete(id)
    res.status(200).json({msg:"Compra eliminada"})
})

module.exports = router;
