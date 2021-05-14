const { model, Schema } = require("mongoose");

const commentSchema = new Schema(
  {
    post_id: { type: Schema.ObjectId, ref: "Post" },
    comments: [
      [
        { type: Schema.ObjectId, ref: "User" },
        { type: String, require: true },
      ],
    ],
  },
  { timestamps: true },
  { versionKey: false }
);

const Comment = model("Comment", commentSchema);

module.exports = Comment;
