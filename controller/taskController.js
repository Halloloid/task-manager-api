const Task = require('../models/Task')

const newtask = async(req,res)=>{
    try {
        let taskdetails = await Task.create({
            ...req.body,
            dueDate:new Date(),
            createdBy:req.user.id
        })
        res.status(200).json(taskdetails)
        console.log("Added Successfully")
    } catch (error) {
        res.status(500).json({error:"Error in Adding Task"})
    }
}

const showAllTask = async(req,res)=>{
    try {
        let taskdetails = await Task.find({createdBy:req.user.id});
        res.status(200).json(taskdetails)
        console.log("Here is all Your Tasks")
    } catch (error) {
        res.status(404).json({error:error.message})
    }
}

const showTheTask = async(req,res)=>{
    try {
        let {id} = req.params
        const task = await Task.findOne({
            _id:id,
            createdBy:req.user.id
        })
        res.status(200).json(task)
    } catch (error) {
        res.status(404).json({message:"No Such Task"})
    }
}

const updateTheTask = async(req,res)=>{
    try {
        let {id} = req.params
        const updatedtask =await Task.findOneAndUpdate(
            { _id: id, createdBy: req.user.id },
            req.body,
            { new: true, runValidators: true } 
        )
        const task = await Task.findById(id)
        res.status(200).json(task)
    } catch (error) {
        res.status(404).json({error:error.message})
    }
}

const deleteTheTask = async(req,res)=>{
    try {
        let {id} = req.params
        await Task.findOneAndDelete({_id:id,createdBy:req.user.id})
        res.status(200).json({message:"Deleted Sucessfully"})
    } catch (error) {
        res.status(500).json({error:error.message})
    }
}


module.exports = {
    newtask,
    showAllTask,
    showTheTask,
    updateTheTask,
    deleteTheTask
}