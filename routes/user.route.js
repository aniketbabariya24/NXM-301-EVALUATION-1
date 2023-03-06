const express= require('express');
const bcrypt= require('bcrypt');
const jwt= require('jsonwebtoken');
require('dotenv').config;

const authRoute= express.Router();

const users= require('../models/Users.model')

authRoute.post('/')