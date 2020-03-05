const express = require('express');
const router = express.Router();
const User = require('../models/User');

// const Property = require('../models/Property')
// Require 3do modelo
const passport = require('../config/passport');
const uploadCloud = require('../config/cloudinary')

//Ejecuta metodo post, hacia la ruta signup y manda el formulario para crear el usuario
router.post('/signup', (req, res, next) => {
  User.register(req.body, req.body.password)
    .then((user) => res.status(201).json({ user }))
    .catch((err) => res.status(500).json({ err }));
});

//Ejecuta metodo post en la ruta login manda el formulario a ser autentificado
router.post('/login', passport.authenticate('local'), (req, res, next) => {
  const { user } = req;
  res.status(200).json({ user });
});

// Al utilizar esta routa, por medio del middleware se cierra la sesion
router.get('/logout', (req, res, next) => {
  req.logout();
  res.status(200).json({ msg: 'Logged out' });
});

// Ruta de acceso a perfil en donde debes estar logeado/autentificado para acceder
router.get('/profile', isAuth, (req, res, next) => {
  User.findById(req.user._id)
//    .populate(segundo modelo)
    .then((user) => res.status(200).json({ user }))
    .catch((err) => res.status(500).json({ err }));
});

router.post('/update', isAuth, async (req, res, next) => {
  const { _id, name, email, phone, address, purpose } = req.body
  await User.updateOne({_id}, {
    name, email, phone, address, purpose 
  })
  res.status(200).json({message: "User update"})
})

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

module.exports = router;
  function isAuth(req, res, next) {
    req.isAuthenticated() ? next() : res.status(401).json({ msg: 'Log in first' });
  }
