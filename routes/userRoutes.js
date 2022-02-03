const express = require('express');
const Users = require('../models/Users')
const router = express.Router()

router.get('/users', (req, res)=>{
    Users.find((err, data) => {
        if(err){
            res.status(500).json('Error to get all the users', err)
        }
        return res.status(200).json(data)
    })  
});

/*router.get('/:id', async(req, res)=>{
    try{
        const Users = await Users.findOne(req.params.id)
        res.status(200).json(tasks)
    }catch(error){
        res.status(500).json(error)
    }
})
*/

router.post('/addUsers', (req, res)=>{
    let name = req.body.name
    let email = req.body.email
    let password = req.body.password

    let newUser = new Users({
        name,
        email,
        password,
    })

    newUser.save().then(()=>{
        res.status(201).json(newUser)
    }).catch((err)=>{
        res.status(400).json('Error to add a new user' +err)
    })
})

router.put('/updateUsers/:id', async(req, res)=>{
    try {
        const updateUsers = await Users.findOneAndUpdate(req.params.id, {
            $set: req.body
        }, {new: true})
        res.status(200).json(updateUsers)
    } catch (error) {
        res.status(500).json(error)    
    }
})

router.delete('/deletedUsers/:id', async(req, res) => {
    try {
        await Users.findOneAndRemove(req.params.id)
        res.status(200).json('User deleted successfully')
    }catch (err) {
        res.status(500).json(err)
    }
})

module.exports = router