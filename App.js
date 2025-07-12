const dotenv = require('dotenv')
const express = require('express')
const mongoose = require('mongoose')
const userRouter = require('./routes/userroutes')
const taskRouter = require('./routes/taskroutes')

dotenv.config()
const app = express()
app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.use('/api/auth',userRouter);
app.use('/api/task',taskRouter);



mongoose.connect(process.env.MONGOOSE_URL)
.then(()=>{
    console.log("Connected to Mongoose")
    app.listen(process.env.PORT,()=>{
        console.log("Running on Port")
    })
})