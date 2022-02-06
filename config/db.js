const {Sequelize} = require('sequelize')

const sequelize = new Sequelize('tasks-db','tasks', 'pass',{
    dialect: 'sqlite',
    host: './dev.sqlite'
})


module.exports = sequelize