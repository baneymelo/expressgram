const { model, Schema } = require("mongoose");

const postSchema = new Schema(
  {
    postedBy: { type: Schema.ObjectId, ref: "User" },
    caption: { type: String },
    media: [{ uri: String }],
  },
  { timestamps: true },
  { versionKey: false }
);

const Post = model("Post", postSchema);

module.exports = Post;
