import { model, Schema } from 'mongoose'

const commentSchema = new Schema({
    user_id: { type: Schema.ObjectId, ref: 'User'},
    post_id: { type: Schema.ObjectId, ref: 'Post'},
    comment_id: [{ type: Schema.ObjectId, ref: 'Comment'}],
    description: { type: String, require: true }
}, {timestamps: true})


export default model('Comment', commentSchema);