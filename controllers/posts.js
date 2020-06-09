const Post = require('../models/post')

module.exports = {
    index,
    new: newPost,
    create,
    delete: deletePost
}

function index(req, res) {
    Post.find({}).populate('createdBy').exec(function(err, posts){
        res.render('home', {
            user: req.user,
            posts
        })
    })
  }

function newPost(req,res) {
    req.user.posts.push(req.body);
    req.user.save(function(err) {
      res.redirect('/');
    });
  }

function create (req,res) {
    Post.create(req.body, function() {
        res.redirect('/')
    })
}

function deletePost(req,res) {
    Post.findByIdAndDelete(req.params.id, function() {
        res.redirect('/')
    })
}
