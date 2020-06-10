const Post = require('../models/post')

module.exports = {
    index,
    create,
    update,
    delete: deletePost,
    show,
    edit
}

function edit(req, res) {
    Post.findById(req.params.id).populate('createdBy').exec(function(err, post) {
        res.render('edit', {
        user: req.user,
            post
        });
    })
}

function update(req,res) {
    Post.update(req.params.id, newPost);
    newPost.save( function () {
        res.redirect(`/`);
    })
}

function show(req,res) {
    Post.findById(req.params.id).populate('createdBy').exec(function(err, post) {
        console.log(err, post)
        res.render('details', {
            user: req.user,
            post
        })
    })
}

function index(req, res) {
    Post.find({}).populate('createdBy').exec(function(err, posts){
        res.render('home', {
            user: req.user,
            posts
        })
    })
  }


function create (req,res) {
    Post.create(req.body, function(err,post) {
        post.createdBy = req.user.id;
        post.save(function() {
            res.redirect('/')
        })
    })
}

function deletePost(req,res) {
    Post.findByIdAndDelete(req.params.id, function() {
        res.redirect('/')
    })
}
