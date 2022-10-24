const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const User = mongoose.model('User');
const Wheel = mongoose.model('Wheel');
const { requireUser } = require('../../config/passport');
const validateWheelInput = require('../../validations/wheels');

// wheels index
router.get('/', async (req, res) => {
    try {
        const wheels = await Wheel.find().populate("owner", "_id, username")
            .sort({ createdAt: -1 })
            .limit(5);
        return res.json(wheels);
    }
    catch(err) {
        return res.json([]);
    }
});

// wheels post
router.post('/', requireUser, validateWheelInput, async (req, res, next) => {
    try {
        const newWheel = new Wheel({
            title: req.body.title,
            contents: req.body.contents,
            owner: req.user._id
        });

        let wheel = await newWheel.save();
        wheel = await wheel.populate('owner', '_id, username');
        return res.json(wheel);
    }
    catch(err) {
        next(err);
    }
});

// wheels show
router.get('/:id', async (req, res, next) => {
    try {
        const wheel = await Wheel.findById(req.params.id)
            .populate('owner', '_id, username');
        return res.json(wheel);
    }
    catch(err) {
        const error = new Error('Wheel not found');
        error.statusCode = 404;
        error.errors = { message: "No wheel found with that id" };
        return next(error);
    }
});

// user wheels index
router.get('/user/:userId', async (req, res, next) => {
    let user;
    try {
        user = await User.findById(req.params.userId);
    } catch(err) {
        const error = new Error('User not found');
        error.statusCode = 404;
        error.errors = { message: "No user found with that id" };
        return next(error);
    }

    try {
        const wheel = await Wheel.find({ owner: user._id })
            .sort({ createdAt: -1 })
            .populate("owner", "_id, username");
        return res.json(wheel);
    }
    catch(err) {
        return res.json([]);
    }
});

module.exports = router;