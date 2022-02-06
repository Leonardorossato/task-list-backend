const express = require('express');
const Tasks = require('../models/Tasks')
const router = express.Router()

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

router.put('/tasks/:id', async(req, res)=>{
    try {
        const updateTasks = await Tasks.findOneAndUpdate(req.params.id, {
            $set: req.body
        }, {new: true})
        res.status(200).json(updateTasks)
    } catch (error) {
        res.status(500).json(error)    
    }
})

router.delete('/tasks/:id', async(req, res) => {
    try {
        await Tasks.findOneAndRemove(req.params.id)
        res.status(200).json('Task deleted successfully')
    }catch (err) {
        res.status(500).json(err)
    }
})

module.exports = router