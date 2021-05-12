const { model, Schema } = require('mongoose');

const likeSchema = new Schema({
    likedBy: { type: Schema.ObjectId, ref: 'User'},
    postedBy: { type: Schema.ObjectId, ref: 'Post'},
})

const Like = model('Like', likeSchema);

module.exports = Like;