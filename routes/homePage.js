var router = require('express').Router();
var homeCtrl = require('../controllers/home')

/* GET home page. */
router.get('/', function(req, res) {
  res.render('Home', { title: 'Home Page', user:req.user });
});

module.exports = router;