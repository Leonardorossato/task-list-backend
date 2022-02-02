const mongoose = require('mongoose')

const tasksSchema = mongoose.Schema({
    tasks : [
        {
            id: {type: Number, required: true},
            title:{type : String, required: true},
        }
    ]
})

const Tasks = mongoose.model('tasks', tasksSchema)