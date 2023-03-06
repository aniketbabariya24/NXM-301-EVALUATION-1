const express= require('express');

const orderRoute= express.Router();

const OrderModel= require('../models/Order.model')

orderRoute.get('/', async(req,res)=>{
    const userId= req.body.userId;

    await OrderModel.findAll({where:{
        userId
    }})
    .then((data)=>{
        res.status(400).send({'orders_data': data})
    })
    .catch((error)=>{
        console.log(error);
        res.status(400).send({'error': "Something wrong"})
    })
});

orderRoute.post('/create', async(req,res)=>{
    const payload= req.body;

    await OrderModel.create(payload)
    .then((i)=>{
        console.log(i)
        res.status(200).send({"message": "Order Placed succesfully"})
    })
    .catch((error)=>{
        console.log(error);
        res.status(400).send({'error': "Something wrong"})
    })

})