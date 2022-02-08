const {Model, DataTypes} = require('sequelize')
const sequelize = require('../config/db')

class Tasks extends Model {}

Tasks.init({
    id:{
       type: DataTypes.INTEGER,
       primaryKey: true,
       autoIncrement: true,
       allowNull: false
    },
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