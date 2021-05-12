const User = require("../models/User");
const jwt = require("jsonwebtoken");
const KEY = require("../config");

const verifyToken = async (req, res, next) => {
     
    try {
        const bearerHeader = req.headers['authorization'];
        
        if(!bearerHeader) return res.json('No token provided')
        const bearerToken = bearerHeader.split(' ')[1];
        const decoded = jwt.verify(bearerToken, KEY.SECRET)
        const user = await User.findById(decoded._id, {_id:1})
            
        if(!user) return res.status(401).json({message: 'Unauthorized'})
        req.user_id = decoded._id; 

        next();

    } catch (error) {
        console.log(error);
        return res.status(401).json({message: 'Unauthorized'})
    }
}

module.exports = verifyToken;