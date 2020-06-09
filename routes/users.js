var router = require('express').Router();
var usersCtrl = require('../controllers/users');

// GET /users
router.get('/users', usersCtrl.index);

router.post('/posts', isLoggedIn, usersCtrl.addPost);

function isLoggedIn(req, res, next) {
  if ( req.isAuthenticated() ) {
    return next();
  } else {
    res.redirect('/auth/google');
  }
}

module.exports = router;
