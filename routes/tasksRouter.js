const express = require('express');
const router = express.Router()
const Tasks = require('../models/Tasks')

//get all tasks
router.get('/tasks', async(req, res)=>{
    try {
        const tasks = await Tasks.findAll()
        res.status(200).json(tasks)
    } catch (error) {
        res.status(500).json(error)
    }
});

//get a especific task from a id
router.get('/tasks/:id', async(req, res)=>{
    try {
        const taskId = req.params.id
        const tasks = await Tasks.findOne({where: {id: taskId}})
        res.status(200).json(tasks)
    } catch (error) {
        res.status(500).json(error)
    }
})

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
        const taskId = req.params.id;
        const task = await Tasks.findOne({ where: { id: taskId}})
        task.title = req.body.title
        task.completed = req.body.completed
        task.editing = req.body.editing
        await task.save()
        res.status(200).json(task);
    }catch(error) {
        res.status(500).json(error);
    }
})

router.delete('/tasks/:id', async(req, res) => {
    try {
        const taskId = req.params.id;
        const task = await Tasks.destroy({ where: { id: taskId}})
        res.status(200).json(task);
    }catch(error) {
        res.status(500).json(error);
    }
})

module.exports = router