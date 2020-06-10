var router = require('express').Router();
var postsCtrl = require('../controllers/posts')

router.get('/posts/:id/details', postsCtrl.show)

module.exports = router;