const User =require("../models/User");

const checkDuplicate = async (req, res, next) =>{

    
    try {
        const { email, username } = req.body;
        const duplicatedEmail = await User.findOne({ email }, { email: 1, _id: 0 })
        const duplicatedUsername = await User.findOne({ username }, { username: 1, _id: 0 })

        if(duplicatedEmail) return res.status(405).send({ err: 'Email already registered' })
        if(duplicatedUsername) return res.status(405).send({ err: 'Username already exist' })
    
        return next();
        
    } catch (err) {
        return console.log(err);
    }
}

module.exports = checkDuplicate;