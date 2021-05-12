const User =require("../models/User");

const checkDuplicate = async (req, res, next) =>{
    
    try {
        const {email, username} = req.body;
        const emailExist = await User.findOne({email}, {email:1, _id:0})
        const usernameExist = await User.findOne({username}, {username:1, _id:0})

        if(!emailExist && !usernameExist){
            return next();
        }else{
            res.status(422).json({message:'Email or username already exist'})
        }
        
    } catch (error) {
        return console.log(err);
    }
}

module.exports = checkDuplicate;