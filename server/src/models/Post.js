const { model, Schema } = require('mongoose');

const postSchema = new Schema({
    postedBy: { type: Schema.ObjectId, ref: 'User'},
    caption: { type: String },
    posts: [{ uri: String }]
    
}, {timestamps: true})

const Post = model('Post', postSchema);

module.exports = Post;