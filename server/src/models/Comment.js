const { model, Schema } = require('mongoose');

const commentSchema = new Schema({
    commentedBy: { type: Schema.ObjectId, ref: 'User'},
    postedBy: { type: Schema.ObjectId, ref: 'Post'},
    commentsFrom: [{ type: Schema.ObjectId, ref: 'Comment'}],
    description: { type: String, require: true }
}, {timestamps: true})

const Comment = model('Comment', commentSchema);

module.exports = Comment;