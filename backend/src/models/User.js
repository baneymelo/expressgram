import mongoose, { model, Schema } from 'mongoose'


const userSchema = new Schema({
    email:
    {
        type: String,
        match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        unique: true,
        required: true
        
    },
    fullname: 
    {
        type: String,
        required: true
    },
    username: 
    {
        type: String,
        required: true,
        unique: true
    },
    password:
    {
        type: String,
        min: 4,
        required: true
    }
})

userSchema.statics.encryptPassword = async (psw) => {
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(psw, salt)
}

export default model("User", userSchema);