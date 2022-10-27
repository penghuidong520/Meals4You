const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const random = require('mongoose-simple-random');

const wheelSchema = Schema({
    owner: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    title: {
        type: String,
        required: true
    },
    contents: {
        type: [String],
        required: true,
        minItems: 2
    }
    // [
    //     {
    //     type: String,
    //     required: true,
    //     min: [2, 'At Least 2']
    //     }
    // ]
}, {
    timestamps: true
});

wheelSchema.plugin(random)

module.exports = mongoose.model('Wheel', wheelSchema);