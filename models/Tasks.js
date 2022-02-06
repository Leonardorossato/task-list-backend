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
        type: DataTypes.STRING,
        allowNull: false
    },
    completed:{
        type: DataTypes.BOOLEAN,
        allowNull: false
    },
    editing:{
        type: DataTypes.BOOLEAN,
        allowNull: false
    }
},{
    sequelize,
    modelName: 'tasks',
    timestamps: false
})

module.exports = Tasks