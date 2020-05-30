const mongoose = require('mongoose');
const Schema = mongoose.Schema;
  
const commentSchema = new mongoose.Schema({
    text: String
}, {
    timestamps: true
});


const postSchema = new mongoose.Schema({
    text: String,
    others: mongoose.Schema.Types.Mixed
}, {
    timestamps: true
});

const userSchema = ({
    googleId: String,
    name: String,
    email: String,
    avatar: String,
    posts: [postSchema],
    comments: [commentSchema]
}, {
    timestamps: true
});

module.exports = mongoose.model('User', userSchema);