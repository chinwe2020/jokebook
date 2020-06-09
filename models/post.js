var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var commentSchema = new Schema({
    text: String,
    createdBy: {type:Schema.Types.ObjectId, ref: 'User'}
}, {
    timestamps: true
}); 

var postSchema = new mongoose.Schema({
    text: String,
    createdBy: {type:Schema.Types.ObjectId, ref: 'User'},
    date: {type: Date, default: Date.now}
},
{
    comment:[commentSchema]
});

module.exports = mongoose.model('Post', postSchema);



