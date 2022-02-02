const bodyParser = require('body-parser')
const express = require('express')
const app = express()
const mongoConnection = require('./config/mongoConnection')
const PORT = 5000 || process.env.PORT

app.use(express.json())
app.use(bodyParser.urlencoded({extended: true}))
app.mongoConnection = mongoConnection

app.listen(PORT, ()=>{
    console.log(`Server is running on the port : ${PORT}`)
})