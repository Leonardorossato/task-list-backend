//imports of the package.json
require('rootpath')()
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
require('dotenv').config()
const PORT = process.env.PORT
/**/

//Imports of the routes and controllers
const tasksRouter = require('./routes/tasksRouter')
const basicAuth = require('./helpers/basicAuth')
const erroHandler = require('./helpers/erroHandler')
const userController = require('./Controllers/usersController')
//

// variable of mongoDB connection
const mongoConnection = require('./config/mongoConnection')

//Using middleware
app.use(express.json())
app.use(bodyParser.urlencoded({extended: false}))
app.use(cors())
//

app.use(basicAuth);

//routes
app.use('/api', tasksRouter)
app.use('/api', userController)
//

app.use(erroHandler)

//Using mongo connectiom
app.mongoConnection = mongoConnection
//

app.listen(PORT, ()=>{
    console.log(`Server is running on the port : ${PORT}`)
})