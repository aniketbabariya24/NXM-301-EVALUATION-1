const {sequelize, DataTypes}= require('sequelize');


const sequelize= require('../configs/db')

const orders= sequelize.define('orders', {
    id:{
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    userId:{
        type: DataTypes.SMALLINT,
        allowNull: false
    },
    itemName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    qty:{
        type: DataTypes.SMALLINT,
        allowNull: false
    },
    total_price:{
        type: DataTypes.INTEGER,
        allowNull: false
    }
})

sequelize.sync().then(()=>{
    console.log("Order Table Created");
})
.catch((error)=>{
    console.log("Unable to Create Table")
    console.log("Error")
})

module.exports={orders}