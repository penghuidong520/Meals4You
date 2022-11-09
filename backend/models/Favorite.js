const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const favoriteSchema = Schema({
    favorator: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
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
}, {
    timestamps: true
});

module.exports = mongoose.model('Favorite', favoriteSchema);