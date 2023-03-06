// const express= require('express');
const {Sequelize, Datatypes}= require('sequelize');


require('dotenv').config();

const sequelize = new Sequelize("eCommerce", "root", process.env.SQLKEY, {
    host: "localhost",
    dialect:"mysql"
});

sequelize.authenticate()
.then(()=>{
    console.log("Connected to DB");
})
.catch((error)=>{
    console.log("Error while connected DB");
    console.log(error);
})

module.exports={sequelize}