import User from "../models/User";

export const signup = async (req, res) =>{
    const  { username /* email, password, roles */ } = await req.body;

    const newUser = new User({
        username,
        email,
        password: await User.encryptPassword(password)
    })

    res.json({message:name})
}