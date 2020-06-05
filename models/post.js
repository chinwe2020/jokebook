const mongoose = require('mongoose');
const Schema = mongoose.Schema;
  
const postSchema = new mongoose.Schema({
    text: String,
}, {
    timestamps: true
});

const commentSchema = new mongoose.Schema({
    text: String
}, {
    timestamps: true
});

module.exports = mongoose.model('Post', postSchema);
module.exports = mongoose.model('Comment', commentSchema);