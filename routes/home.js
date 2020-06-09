var router = require('express').Router();
var postCtrl = require('../controllers/posts')

router.get('/', postCtrl.index)
router.get('/:id', postCtrl.new)
router.post('/posts', postCtrl.create)
router.delete('/posts/:id', postCtrl.delete)

module.exports = router;