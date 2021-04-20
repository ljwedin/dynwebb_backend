const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    userName: {
        type: String,
        min: 3,
        required: true
    },
    password: {
        type: String,
        min: 3,
        required: true
    },
    newsletter: {
        type: Boolean,
        required: true
    }
});

const User = mongoose.model('User', UserSchema);

module.exports = User;