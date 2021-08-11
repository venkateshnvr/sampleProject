const mongoose = require('mongoose');

const userForm = mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true
    },
    phone: {
        type: String,
        required: true,
        trim: true
    },
    password: {
        type: String,
        require: true,
    }, 
    userType: {
        type: String,
        require: true,
        default: "user"
    }
})

module.exports = mongoose.model('user', userForm);