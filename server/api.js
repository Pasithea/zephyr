const express = require('express');
const { createUser, verifyUser } = require('./controllers/userController');
const router = express.Router();

router.post('/signup', createUser, (req, res) => {
  if (res.locals.signup) return res.status(200).json({user: res.locals.user});
  return res.status(404).json();
});

router.post('/login', verifyUser, (req, res) => {
  if (res.locals.login) return res.status(200).json({fname: res.locals.fname});
  return res.status(404).json();
});


module.exports = router;