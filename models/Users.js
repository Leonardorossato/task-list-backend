const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    name : {type:String},
    password : {type:String}
})

const User = mongoose.model('users', userSchema)
module.exports = User