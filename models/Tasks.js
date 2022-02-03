const mongoose = require('mongoose')

const tasksSchema = new mongoose.Schema({
    title : {type : String, required: true},
    completed : {type : Boolean, required: true},
    editing: {type : Boolean, required: true}
})
const Tasks = mongoose.model('tasks', tasksSchema)
module.exports = Tasks