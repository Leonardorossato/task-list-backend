const mongoose = require('mongoose')

try {
    mongoose.connect(
    {useNewUrlParser: true, useCreateIndex: true, useFindAndModify: true, useUnifiedTopology: true})
    console.log('Connection successfuly with MongoDB')
} catch (error) {
    console.log('Something wrong with your MongoDB connection' + error)
}
