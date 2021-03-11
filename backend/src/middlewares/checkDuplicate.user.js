import User from "../models/User";

const checkDuplicate = async (req, res, next) =>{
    const {email} = req.body;
    const alreadyExist = await User.findOne({email})
    
    if(!alreadyExist){
        next();
    }else{
        res.status(422).json({message:'The user already exist'})
    }
}

export default checkDuplicate;