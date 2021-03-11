import { model, Schema } from 'mongoose'

const followSchema = new Schema({
    follower_id: { type: Schema.ObjectId, ref: 'User'},
    followed_id: { type: Schema.ObjectId, ref: 'User'},
})

export default model('Follow', followSchema);