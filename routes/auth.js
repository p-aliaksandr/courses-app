const {Router} = require('express');
const User = require('../models/user');
const router = Router();

router.get('/login', (req, res) => {
  res.render('auth/login', {
    title: 'Авторизация',
    isLogin: true,
  })
})

router.get('/logout', (req, res) => {
  req.session.destroy(() => {
    res.redirect('/auth/login/#login');
  })
})

router.post('/login', async (req, res) => {
  const user = await User.findById('5e949fe2e05d8a095089ae9e');
  req.session.user = user;
  req.session.isAuthenticated = true;
  req.session.save((err) => {
    if(err) {
      throw err
    }
    res.redirect('/');
  })
})

module.exports = router;