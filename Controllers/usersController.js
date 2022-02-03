const express = require('express');
const router = express.Router();

router.get('/', getAll)
router.post('/authenticate', authenticate)


const authenticate = (req, res, next) => {
    userService.authenticate(req.body)
        .then(user => user ? res.json(user) : res.status(400).json({ message: 'Username or password is incorrect' }))
        .catch(err => next(err));
}

const getAll = (req, res, next) =>{
    userService.getAll()
        .then(users => res.json(users))
        .catch(err => next(err));
}

module.exports = router