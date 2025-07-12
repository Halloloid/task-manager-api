const express = require('express')
const taskRouter = express.Router()
const {newtask,showAllTask,showTheTask,updateTheTask,deleteTheTask} = require('../controller/taskController')
const verifyToken = require('../middleware/verifytoken')


taskRouter.post('/',verifyToken,newtask)
taskRouter.get('/',verifyToken,showAllTask)
taskRouter.get('/:id',verifyToken,showTheTask)
taskRouter.put('/:id',verifyToken,updateTheTask)
taskRouter.delete('/:id',verifyToken,deleteTheTask)


module.exports = taskRouter