const express = require('express');
const router = express.Router();
const User = require('../models/User');
const Card= require('../models/Card');
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

router.get('/services', isAuth, (req, res, next) => {
  res.status(200).json({ msg: 'Working' });
});


router.post('/update', isAuth, async (req, res, next) => {
  const { name, email, phone, address, purpose } = req.body
  console.log(name, email, phone, address, purpose)
  const user = await User.findByIdAndUpdate(
    req.user._id,
  )
}) 

//Upload Routes/auths linea 43
router.post(
  '/upload',
  isAuth,
  uploadCloud.single('imgURL'),
  async (req, res, next) => {
    const { secure_url } = req.file
    const user = await User.findByIdAndUpdate(
      req.user._id,
      { imgURL: secure_url },
      { new: true }
    )
    res.status(200).json({ user })
  }
)

//Create Routes/auths linea 57
router.post('/create', isAuth, async (req, res, next) => {
  const { name, imageURL,description } = req.body
  const { _id } = req.user
  const card = await Card.create({ name, imageURL, description })
  const cardPopulated = await Card.findById(card._id).populate('author')
  const user = await User.findByIdAndUpdate(
    _id,
    { $push: { cards: card._id } },
    { new: true }
  ).populate({
    path: 'card',
    populate: {
      path: 'author',
      model: 'User'
    }
  })
  return res.status(201).json({ user, card: cardPopulated })
})

//Read Routes/auths linea 76
router.get('/cards', async (req, res, next) => {
  const cards = await Card.find()
    .sort({ createdAt: -1 })
  res.status(200).json({ cards })
})
//Delete pero tu investgale


router.get('/cards/:id', async (req, res, next) => {
  const {id} = req.params;
  const card = await Card.findById(id)
  res.status(200).json(card)
})

router.patch('/cards/:id', async(req, res, next) => {
  const {id} = req.params
  const {name,description} = req.body
  await Card.findByIdAndUpdate(id, {
    name, description, 
  })
  res.status(200).json({message: "card update"})
})

router.delete('/cards/:id', async(req, res, next) => {
  const {id} = req.params
  await Card.findByIdAndDelete(id)
  res.status(200).json({ message: "card delete"})
})
 
module.exports = router;
  function isAuth(req, res, next) {
    req.isAuthenticated() ? next() : res.status(401).json({ msg: 'Log in first' });
  }
