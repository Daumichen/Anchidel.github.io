const mongoose = require('mongoose')

const User = mongoose.model('User',{
    user_mail: String,
    user_password: String,
    notebook_name: String,
    notebook_color: String,
    notebook_text: String
})

module.exports = User