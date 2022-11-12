const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const favoriteSchema = Schema({
    favoritor: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    owner: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    wheelId: {
        type: Schema.Types.ObjectId,
        ref: 'Wheel'
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