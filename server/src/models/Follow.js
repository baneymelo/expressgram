const { model, Schema } = require("mongoose");

const followSchema = new Schema(
  {
    user_id: { type: Schema.ObjectId, ref: "User" },
    following: [{ type: Schema.ObjectId, ref: "User" }],
    followers: [{ type: Schema.ObjectId, ref: "User" }],
  },
  { versionKey: false }
);

const Follow = model("Follow", followSchema);

module.exports = Follow;
