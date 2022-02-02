const mongoose = require('mongoose')

const tasksSchema = mongoose.Schema({
    title : {type : String},
    completed : {type : Boolean},
    editing: {type : Boolean}
})
const Tasks = mongoose.model('tasks', tasksSchema)
module.exports = Tasks