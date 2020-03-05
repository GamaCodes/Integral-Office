

router.post('/create/property', isAuth, async (req, res, next) => {
    //Destructurar y pasar todos los elementos del modelo para que los pueda recibir
    const { imageURL, direction, description } = req.body
    const { _id } = req.user
    const property = await Property.create({ imageURL, direction, description, author: _id })
    const propertyPopulated = await Property.findById(property._id).populate('author')
    const user = await User.findByIdAndUpdate(
      _id,
      { $push: { properties: property._id } },
      { new: true }
    ).populate({
      path: 'property',
      populate: {
        path: 'author',
        model: 'User'
      }
    })
    return res.status(201).json({ user, property: propertyPopulated })
  })
  
  //Read Routes/auths linea 76
  router.get('/property', async (req, res, next) => {
    const property = await Property.find()
      .sort({ createdAt: -1 })
    res.status(200).json({ property })
  })
  //Delete pero tu investgale
  
  
  router.get('/property/:id', async (req, res, next) => {
    const {id} = req.params;
    const property = await Property.findById(id)
    res.status(200).json(property)
  })
  
  router.patch('/property/:id', async(req, res, next) => {
    const {id} = req.params
    const {direction,description} = req.body
    await Property.findByIdAndUpdate(id, {
      direction, description, 
    })
    res.status(200).json({message: "property update"})
  })
  
  router.delete('/property/:id', async(req, res, next) => {
    const {id} = req.params
    await Property.findByIdAndDelete(id)
    res.status(200).json({ message: "property delete"})
  })

  module.exports = router;