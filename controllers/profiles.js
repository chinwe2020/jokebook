var Profile = require('../models/user');

module.exports = {
    index,
    create,
}


function create(req,res) {
    Profile.create(req.body, function() {
        res.render(`/profile`)
    });
}

function index(req,res) {
    Profile.find({}, function(err, profiles) {
        res.render('/profiles/index', {title: 'Profile', profiles});
    });
}