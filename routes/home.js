var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/jokebook', function(req, res, next) {
  res.render('Home', { title: 'Home Page' });
});

module.exports = router;
