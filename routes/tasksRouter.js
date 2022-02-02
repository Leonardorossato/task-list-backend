const express = require('express');
const Tasks = require('../models/Tasks')
const router = express.Router()

router.get('/tasks', (req, res)=>{
    Tasks.find((err, data) => {
        if(err){
            res.status(500).json('Error to get all the tasks', err)
        }
        return res.status(200).json(data)
    })  
});

router.post('/addTasks', (req, res)=>{
    let title = req.body.title
    let completed = req.body.completed
    let editing = req.body.editing

    let newTask = new Tasks({
        title,
        completed,
        editing
    })

    newTask.save().then(()=>{
        res.status(201).json(newTask)
    }).catch((err)=>{
        res.status(400).json('Error to add the tasks'+err)
    })
})

router.put('/updateTasks/:id', async(req, res)=>{
    try {
        const updateTasks = await Tasks.findOneAndUpdate(req.params.id, {
            $set: req.body
        }, {new: true})
        res.status(200).json(updateTasks)
    } catch (error) {
        res.status(500).json(error)    
    }
})

module.exports = router