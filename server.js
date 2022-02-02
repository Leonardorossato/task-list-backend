const bodyParser = require('body-parser')
const express = require('express')
const app = express()
const tasksRouter = require('./routes/tasksRouter')
const mongoConnection = require('./config/mongoConnection')
require('dotenv').config
const PORT = process.env.PORT

app.use(express.json())
app.use(bodyParser.urlencoded({extended: true}))

app.use('/api', tasksRouter)

app.mongoConnection = mongoConnection

app.listen(PORT, ()=>{
    console.log(`Server is running on the port : ${PORT}`)
})