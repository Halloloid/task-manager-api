const mongoose = require('mongoose')

const taskSchema = new mongoose.Schema({
    title:String,
    description:String,
    dueDate:{
        type:Date,
        required:true
    },
    completed:Boolean,
    createdBy:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true
    }
})

const Task = mongoose.model("Task",taskSchema)

module.exports = Task