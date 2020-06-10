var router = require('express').Router();
var postCtrl = require('../controllers/posts')

router.get('/', postCtrl.index)
// router.get('/:id', postCtrl.new)
router.post('/posts', isLoggedIn, postCtrl.create)
router.delete('/posts/:id', isLoggedIn, postCtrl.delete)
router.get('/posts/:id/edit', isLoggedIn, postCtrl.edit)
router.put('/posts/:id', isLoggedIn, postCtrl.update)

function isLoggedIn(req, res, next) {
    if ( req.isAuthenticated() ) {
      return next();
    } else {
      res.redirect('/auth/google');
    }
  }
  

module.exports = router;