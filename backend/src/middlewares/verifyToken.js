import User from "../models/User";
import jwt from "jsonwebtoken";
import KEY from "../config";

 const verifyToken = async (req, res, next) => {
    try {

        
    const bearerHeader = req.headers['authorization'];
    
    if(!bearerHeader) return res.json('No token provided')
    const bearerToken = bearerHeader.split(' ')[1];
    
    const decoded = jwt.verify(bearerToken, KEY.SECRET)
    const user = await User.findById(decoded._id, {password: 0})
    if(!user) return res.status(401).json({message: 'unauthorized'})
    
    next();

    } catch (error) {
        return res.status(401).json({message: 'unauthorized'})
    }
}

export default verifyToken;