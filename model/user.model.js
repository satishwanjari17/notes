const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    username: {type:String,unique: true},
    password: String,

});

module.exports = mongoose.model('User', UserSchema);