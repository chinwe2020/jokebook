var Profile = require('../models/user');

module.exports = {
    create
}

function create(req,res) {
    res.render('/profile', {
        users,
        name: req.query.name,
        sortKey,
        user: req.user
      });
}

