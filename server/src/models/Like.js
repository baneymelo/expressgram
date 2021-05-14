const { model, Schema } = require("mongoose");

const likeSchema = new Schema(
  {
    post_id: { type: Schema.ObjectId, ref: "Post" },
    likedBy: [{ type: Schema.ObjectId, ref: "User" }],
  },
  { versionKey: false }
);

const Like = model("Like", likeSchema);

module.exports = Like;
