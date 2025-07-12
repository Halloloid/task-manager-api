const jwt  = require('jsonwebtoken')
const dotenv = require('dotenv')

dotenv.config()

const verifyToken = (req,res,next)=>{
    const authheader = req.headers.authorization;

    if(!authheader || !authheader.startsWith("Bearer ")){
        return res.status(401).json({message : "Acess Denied No token Provided"})
    }

    const token = authheader.split(" ")[1];

    try {
        const decoded = jwt.verify(token,process.env.JWT_SECERT);
        req.user = decoded;
        next()
    } catch (error) {
        res.status(400).json({message:"Invalid Token"})
    }

}

module.exports = verifyToken;