const express = require('express');
const router = express.Router()
const Tasks = require('../models/Tasks')

//get all tasks
router.get('/', async(req, res)=>{
    try {
        const tasks = await Tasks.findAll()
        res.status(200).json(tasks)
    } catch (error) {
        res.status(500).json(error)
    }
});

router.post('/tasks', async(req, res)=>{
    try {
        const tasks = await Tasks.create(req.body)
        res.status(201).json(tasks)
    }catch (error) {
        res.status(400).json(error)
    }
})

router.put('/tasks/:id', async (req, res)=>{
    const taskId = req.params.id
    const task = {title, completed, editing} = req.body
    await Tasks.findOne({where: {id: taskId}}).then(()=>{
        
        res.status(200).json(task)
    }).catch((error)=>{
        res.status(500).json(error)
    })
})

router.delete('/tasks/:id', async(req, res) => {
    const taskId = req.params.id
    await Tasks.destroy({where: {id: taskId}}).then(()=>{
        res.status(200).json('Task deleted sucessfully')
    }).catch((error)=>{
        res.status(500).json(error)
    })
})

module.exports = router