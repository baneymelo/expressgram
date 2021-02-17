import mongoose, { model, Schema } from 'mongoose'

const userSchema = new Schema({
    username: 
    {
        type: String,
        required: true
    },
    email:
    {
        type: String,
        match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        unique: true,
        required: true
        
    },
    password:
    {
        type: String,
        min: 4,
        required: true
    }


})

export default model("User", userSchema);

/* 
const MyUser = mongoose.model('User', userSchema)
const user = new MyUser();

*/