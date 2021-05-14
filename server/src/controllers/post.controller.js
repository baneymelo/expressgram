const { User, Post } = require("../models");

module.exports.create = async (req, res) => {

    try {
        const { caption, posts } = req.body;

        const post = new Post({
            postedBy: req.user_id,
            caption,
            posts
        })

        await post.save();
        res.json({msg: 'Saved successfully!' })

    } catch (err) {
        console.log(err);
    }
}

module.exports.all = async (req, res) => {

    try {
        const posts = await Post.find().populate("postedBy", "_id username")

        return res.send({ posts })

    } catch (err) {
        console.log(err);
    }
}

module.exports.profile = async (req, res) => {

    const nick = req.params.username;
    const username = await User.findOne({ username: nick }, { password:0 })
    const posts = await Post.find({ user_id: username._id })
    res.json({ username, posts })
}