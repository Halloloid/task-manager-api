const User = require('../models/User')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const dotenv= require('dotenv')

dotenv.config()


const register = async(req,res)=>{
    try {
        const {email,password} = req.body;

        const isuserPresent = await User.findOne({email})
        if(isuserPresent) return res.status(400).json({message:"User already Exists"});
        const hashedPassword = await bcrypt.hash(password,10)
        const newUSer = new User({
            email,
            password:hashedPassword
        })
        await newUSer.save()
        res.status(201).json({message:"User Resigesterd Succesfully"})
    } catch (error) {
        res.status(500).json({error:error.message})
    }
}

const login = async(req,res)=>{
    try {
        const {email,password} = req.body
        const userExists = await User.findOne({email})
        if(!userExists) return res.status(404).json({message:"USer not Found"});
        const isMatch = await bcrypt.compare(password,userExists.password)
        if(!isMatch) return res.status(401).json({message:"Invalid Password"});
        const token = jwt.sign({id:userExists._id},process.env.JWT_SECERT,{
            expiresIn:'1h',
        })
        res.json({token});
    } catch (error) {
        res.status(500).json({error:error.message})
    }
}

const profile = async(req,res)=>{
    try {
        const user = await User.findById(req.user.id).select('-password');
        if(!user) return res.status(404).josn({message:"User Not Found"});
        res.json(user)
    } catch (error) {
        res.status(500).json({error:error.message})
    }
}

module.exports = {
    register,
    login,
    profile
}