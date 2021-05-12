const { User, Post } = require("../models");

module.exports.post = async (req, res) => {

    try {
        const {caption, posts} = req.body;

        const post = new Post({
            postedBy: req.user_id,
            caption,
            posts
        })

        await post.save();
        res.json({msg: 'Saved successfully!' })

    } catch (error) {
        console.log(error);
    }
}

module.exports.profile = async (req, res) => {

    const nick = req.params.username;
    const username = await User.findOne({username: nick}, {password:0})
    const posts = await Post.find({user_id: username._id})
    res.json({username, posts})
}