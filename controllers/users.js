const User = require('../models/user');

module.exports = {
    index,
    addPost
};

function index(req, res, next) {
    console.log(req.query)
    // Make the query object to use with user.find based on
    // the user has submitted the search form or not
    let modelQuery = req.query.name ? {name: new RegExp(req.query.name, 'i')} : {};
    // Default to sorting by name
    let sortKey = req.query.sort || 'name';
    User.find(modelQuery)
    .sort(sortKey).exec(function(err, users) {
      if (err) return next(err);
      // Passing search values, name & sortKey, for use in the EJS
      res.render('/home', {
        users,
        name: req.query.name,
        sortKey,
        user: req.user
      });
    });
  }

  function addPost(req, res, next) {
    req.user.posts.push(req.body);
    req.user.save(function(err) {
      res.redirect('/users');
    });
  }
  