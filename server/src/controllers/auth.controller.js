const { User, Follow } = require("../models");
const bcrypt = require('bcryptjs');
const jwt = require("jsonwebtoken");
const KEY = require("../config");

module.exports.signup = async (req, res, next) => {

    try {
        const  { email, fullname, username, password } = await req.body;
    
        const user = new User({
            email,
            fullname, 
            username,
            password: await User.encryptPassword(password)
        })
    
        await user.save();
        new Follow({ userId: await user._id })


        const token = jwt.sign({ _id: user._id }, KEY.SECRET, { expiresIn: 86400 })
        res.status(200).json({ token })

        next()        
        
    } catch (error) {
        res.status(405).json({ message: 'Invalid input' })
    }
}

module.exports.signin = async (req, res) => {

    try {
        const { email, password } = req.body;
        
        const user = await User.findOne({ email })
        if(!user){
            return res.status(400).json({ message: 'User does not exist' })
        }else{
            const psw = await bcrypt.compare(password, user.password)
            if(!psw) return res.json({ message: 'Invalid password' })

            const token = jwt.sign({ _id: user._id }, KEY.SECRET, { expiresIn: '24h' })
            res.status(201).json({ message: "User successfully signed", token: token })
        }            
    } catch (error) {
        console.log(error)
    }
}