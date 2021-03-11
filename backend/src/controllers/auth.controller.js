import {User, Post} from "../models/index";
import bcrypt from 'bcryptjs';
import jwt from "jsonwebtoken";
import KEY from "../config";
import { json } from "express";

export const signup = async (req, res, next) =>{

    try {
        const  { email, fullname, username, password } = await req.body;
    
        const user = new User({
            email,
            fullname, 
            username,
            password: await User.encryptPassword(password)
        })
    
        await user.save();

        const token = jwt.sign({_id: user._id}, KEY.SECRET, {expiresIn: 86400})
        res.json({token})        
        
    } catch (error) {
        console.log(error);
        next()
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

        const token = jwt.sign({_id: user._id}, KEY.SECRET, {expiresIn: 86400})
        res.json({message: `Welcome ${user._id}!`, token: token})
    }            
    } catch (error) {
        console.log(error)
    }
}

export const post = async (req, res) => {

try {
    const {user_id, caption, posts} = req.body;

    const post = new Post({
        user_id,
        caption,
        posts
    })

    await post.save();
    res.json({msg: 'Saved successfully!' })


} catch (error) {
    console.log(error);
}
}

export const profile = async (req, res) => {
    const nick = req.params.username;
    const username = await User.findOne({username: nick}, {password:0})
    const posts = await Post.find({user_id: username._id})
    res.json({username, posts})
}