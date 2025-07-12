const express = require('express')
const userRouter = express.Router()
const {register,login,profile} = require('../controller/userController')
const verifyToken = require('../middleware/verifytoken')

userRouter.post('/register',register)
userRouter.post('/login',login)
userRouter.get('/profile',verifyToken,profile)

module.exports = userRouter