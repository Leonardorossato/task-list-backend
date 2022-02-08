const {Model, DataTypes} = require('sequelize')
const sequelize = require('../config/db')

class Tasks extends Model {}

Tasks.init({
    title:{
        type: DataTypes.STRING
    },
    completed:{
        type: DataTypes.BOOLEAN
    },
    editing:{
        type: DataTypes.BOOLEAN
    }
},{
    sequelize,
    modelName: 'tasks',
    timestamps: false
})

module.exports = Tasks