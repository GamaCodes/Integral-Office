const express = require('express');
const router = express.Router();
const User = require('../models/User');
const Card = require('../models/Supplie');
const Property = require('../models/Property')
// Require 3do modelo
const passport = require('../config/passport');
const uploadCloud = require('../config/cloudinary')

//Ejecuta metodo post, hacia la ruta signup
router.post('/signup', (req, res, next) => {
//Manda el formulario para crear el usuario  
  User.register(req.body, req.body.password)
    .then((user) => res.status(201).json({ user }))
    .catch((err) => res.status(500).json({ err }));
});

router.post('/login', passport.authenticate('local'), (req, res, next) => {
  const { user } = req;
  // Para traer otro modelo revisar memes ln 19 routes - auth
  res.status(200).json({ user });
});

// Al utilizar esta routa, por medio del middleware te redirige a home
router.get('/logout', (req, res, next) => {
  req.logout();
  res.status(200).json({ msg: 'Logged out' });
});

// Ruta de perfil en donde debes estar logeado/autentificado para acceder
router.get('/profile', isAuth, (req, res, next) => {
  User.findById(req.user._id)
//    .populate(segundo modelo)
    .then((user) => res.status(200).json({ user }))
    .catch((err) => res.status(500).json({ err }));
});

router.get('/', (req, res, next) => {
  res.status(200).json({ msg: 'Working' });
});

// router.get('/services', isAuth, (req, res, next) => {
//   res.status(200).json({ msg: 'Working' });
// });


router.post('/update', isAuth, async (req, res, next) => {
  const { _id, name, email, phone, address, purpose } = req.body
  await User.updateOne({_id}, {
    name, email, phone, address, purpose 
  })
  res.status(200).json({message: "User update"})
})


//Upload Routes/auths linea 43
router.post(
  '/upload',
  isAuth,
  uploadCloud.single('imgURL'),
  async (req, res, next) => {
    const { secure_url } = req.file
    const user = await User.findByIdAndUpdate(
      req.user.id,
      { imgURL: secure_url },
      { new: true }
    )
    res.status(200).json({ user })
  }
)









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
  function isAuth(req, res, next) {
    req.isAuthenticated() ? next() : res.status(401).json({ msg: 'Log in first' });
  }
