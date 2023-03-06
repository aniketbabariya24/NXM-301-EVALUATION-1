const {sequelize, DataTypes, DataTypes}= require('sequelize');

const sequelize= require('../configs/db')
const {isEmail}= require('validator')
const users= sequelize.define('users', {
    id:{
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
   email:{
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate:{
        isEmail: true
    }
   },
    pwd: {
        type: DataTypes.STRING,
        allowNull: false
    }
})

sequelize.sync().then(()=>{
    console.log("User Table Created");
})
.catch((error)=>{
    console.log("Unable to Create Table")
    console.log(error)
})

module.exports={users}