const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = ({
    _id: {type: Object},
    name: {type: String},
    email:{type: String},
    password:{type: String}
});

module.exports = mongoose.model('User', userSchema);