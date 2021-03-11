import { model, Schema } from 'mongoose'

const postSchema = new Schema({
    user_id: { type: Schema.ObjectId, ref: 'User'},
    caption: { type: String },
    posts: 
    [{   
        uri: String,
        type: String, 
        tags: [{type: Schema.ObjectId, ref: 'User'}],
        require: true
    }]
    
}, {timestamps: true})

export default model('Post', postSchema);