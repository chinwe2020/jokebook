const Post = require('../models/post');

module.exports = {
  create,
  deleteComment
};

function deleteComment(req,res) {
  Post.findByIdAndDelete(req.params.id, function() {
      res.redirect('/')
  })
}

function create (req,res) {
  Post.findById(req.params.id, function(err, post) {
    req.body.createdBy = req.user._id;
    post.comments.push(req.body)
    post.save(function() {
          res.redirect(`/posts/${req.params.id}/details`)
      })
  })
}