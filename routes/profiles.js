var router = require('express').Router();
var profilesCtrl = require('../controllers/profiles')

router.get('/profile', function(req, res) {
    res.render('Profile', { title: 'User Profile', user:req.user });
  });

module.exports = router;