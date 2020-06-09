var router = require('express').Router();
var profilesCtrl = require('../controllers/profiles')

router.get('/', profilesCtrl.index)


module.exports = router;