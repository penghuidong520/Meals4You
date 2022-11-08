const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    hashedPassword: {
        type: String,
        required: true
    },
    wheels: [{
        type: Schema.Types.ObjectId,
        ref: 'Wheel'
    }],
    favoriteWheels: [{
        type: Schema.Types.ObjectId,
        ref: 'Wheel'
    }],
    dishes: [{
        type: Schema.Types.ObjectId,
        ref: 'Dish'
    }]
}, {
        timestamps: true
});

module.exports = mongoose.model('User', userSchema);