import User from "../models/User";
import bcrypt from 'bcryptjs';

export const signup = async (req, res) =>{

    try {
        const  { email, fullname, username, password } = await req.body;
    
        const user = new User({
            email,
            fullname, 
            username,
            password: await User.encryptPassword(password)
        })
    
        await user.save();
        
        res.json({user})
        
    } catch (error) {
        res.send(error)
    }
}

export const signin = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({email})

        if(!user){
         return res.status(400).json({message: 'User doesn\'t exist'})
        }else{
            const psw = await bcrypt.compare(password, user.password)
            if(!psw) return res.json({message: 'Invalid password'})
            res.json({message: `Welcome ${user.username}!`})
        }            
    } catch (error) {
        console.log(error)
    }

}