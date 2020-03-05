const router = require('express').Router();
const Product = require('../models/Product');

router.get('/', async (req, res, next) => {
    const products = await Product.find().sort({createdAt: -1})
    res.status(200).json({products})
})

router.post('/create', async (req, res, next) => {
    const {name, supplies, descripcion, price} = req.body
    const product = await Product.create({cname, supplies, descripcion, price})
    res.status(201).json({product})
})

router.patch('/edit/:id', async (req, res, next) => {
    const {name, supplies, descripcion, price} = req.body
    const {id} = req.params
    const product = await Product.findByIdAndUpdate(id, {name, supplies, descripcion, price})
        .catch(err => res.status(500).json(err))
    res.status(200).json({product})
})

router.delete('/delete/:id', async (req, res, next) => {
    const {id} = req.params
    await Product.findByIdAndDelete(id)
    res.status(200).json({msg:"Producto borrado"})
})

module.exports = router
