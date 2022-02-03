require('rootpath')()
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const tasksRouter = require('./routes/tasksRouter')
const basicAuth = require('./helpers/basicAuth')
const erroHandler = require('./helpers/erroHandler')
const userController = require('./Controllers/usersController')
const mongoConnection = require('./config/mongoConnection')
require('dotenv').config()
const PORT = process.env.PORT

app.use(express.json())
app.use(bodyParser.urlencoded({extended: false}))
app.use(cors())

app.use(basicAuth);

app.use('/api', tasksRouter)
app.use('/api', userController)

app.use(erroHandler)

app.mongoConnection = mongoConnection

app.listen(PORT, ()=>{
    console.log(`Server is running on the port : ${PORT}`)
})