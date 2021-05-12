const { model, Schema } = require('mongoose');

const followSchema = new Schema({
    followBy: { type: Schema.ObjectId, ref: 'User'},
    followFrom: { type: Schema.ObjectId, ref: 'User'},
})

const Follow = model('Follow', followSchema);

module.exports = Follow;