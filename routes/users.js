var router = require('express').Router();
var usersCtrl = require('../controllers/users');

// GET /students
router.get('/users', usersCtrl.index);

function isLoggedIn(req, res, next) {
  if ( req.isAuthenticated() ) {
    return next();
  } else {
    res.redirect('/auth/google');
  }
}

module.exports = router;
