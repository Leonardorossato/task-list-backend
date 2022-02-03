const mongoose = require('mongoose')

const userSchema =new mongoose.Schema({
    name : {type: String, required: true},
    email : {type: String , required: true, unique: true, min: 10, max: 200},
    password : {type: String, required: true, min: 6, max: 50}
})

const Users = mongoose.model('users', userSchema)
module.exports = Users