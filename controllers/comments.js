const Comment = require('../models/post');

module.exports = {
  create,
  deleteComment
};

function deleteComment(req,res) {
  Comment.findByIdAndDelete(req.params.id, function() {
      res.redirect('/')
  })
}

function create (req,res) {
  Comment.create(req.body, function(err, comment) {
      comment.createdBy = req.user.id;
      comment.save(function() {
          res.redirect('/posts/:id/details')
      })
  })
}