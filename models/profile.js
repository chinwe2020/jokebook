const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const profileSchema = new Schema({
    avatar: String,
    googleId: String,
    name: String,
    email: String,
    post: [{type: mongoose.Schema.Types.ObjectId, ref: 'Post'}],
    comment: [{type: mongoose.Schema.Types.ObjectId, ref: 'Comment'}]
}, {
    timestamps: true
});

module.exports = mongoose.model('Profile', profileSchema);