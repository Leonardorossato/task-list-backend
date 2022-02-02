const mongoose = require('mongoose')
require('dotenv').config()
const mongoURL = process.env.mongoURL

try {
    mongoose.connect(mongoURL,{useNewUrlParser: true, useUnifiedTopology: true}).then(()=>{
        console.log('Connection successfuly with MongoDB')
    })
    
} catch (error) {
    console.log('Something wrong with your MongoDB connection' + error)
}
