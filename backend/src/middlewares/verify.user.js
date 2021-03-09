import User from "../models/User";

const verifyUser = async (req, res, next) =>{
    const {email, username} = req.body;
    const alreadyExist = await User.findOne({email})
    
    if(!alreadyExist){
        next();
    }else{
        return res.status(422).json({message:'The user already exist'})
    }
}

export default verifyUser;