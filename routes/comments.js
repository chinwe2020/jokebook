var express = require('express');
var router = express.Router();
var commentsCtrl = require('../controllers/comments');

router.post('/posts/:id/comments', isLoggedIn, commentsCtrl.create);
router.delete('/posts/:id/comments', isLoggedIn, commentsCtrl.deleteComment)

function isLoggedIn(req, res, next) {
    if ( req.isAuthenticated() ) {
      return next();
    } else {
      res.redirect('/auth/google');
    }
  }
  

module.exports = router;