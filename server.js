//imports of the libs on the package.json
require('rootpath')()
const express = require('express')
const app = express()
const sequelize = require('./config/db')
const cors = require('cors')
const swaggerUi = require('swagger-ui-express')
const swaggerFile = require('./swagger/swagger_output.json')
require('dotenv').config()
const PORT = process.env.PORT
/**/



//Imports of the routes and controllers
const tasksRouter = require('./routes/tasksRouter')
const basicAuth = require('./helpers/basicAuth')
const erroHandler = require('./helpers/erroHandler')
const userController = require('./Controllers/usersController')
//

// variable of Sqlite connection with sequelize
sequelize.sync().then(()=>{
    console.log('Sqlite connection is Ok')
}).catch(()=>{
    console.log('Sqlite connection is Failed')
})

//Using middleware
app.use(express.json())
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerFile));
app.use(cors())
//

app.use(basicAuth);

//imports of the using routes
app.use('/api', tasksRouter)
app.use('/api', userController)
//

app.use(erroHandler)

//port
app.listen(PORT, ()=>{
    console.log(`Server is running on the port : ${PORT}/doc`)
})