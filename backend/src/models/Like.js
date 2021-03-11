import { model, Schema } from 'mongoose'

const likeSchema = new Schema({
    user_id: { type: Schema.ObjectId, ref: 'User'},
    post_id: { type: Schema.ObjectId, ref: 'Post'},
})


export default model('Like', likeSchema);