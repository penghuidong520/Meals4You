const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const User = mongoose.model('User');
const { requireUser, restoreUser } = require('../../config/passport');
const validateWheelInput = require('../../validations/wheels');
const Wheel = mongoose.model('Wheel');

// wheels index
router.get('/', async (req, res) => {
    try {
        const wheels = await Wheel.aggregate([{$sample:{size:10}}]);
        return res.json(wheels);
    }
    catch(err) {
        return res.json(err);
    }
});

// wheels post
router.post('/', validateWheelInput, restoreUser, async (req, res, next) => {
    try {
        const newWheel = new Wheel({
            title: req.body.title,
            contents: req.body.contents,
            owner: req.user._id
        });
        let wheel = await newWheel.save();
        // save to user wheels
        const user = await User.findById(req.user._id);
        user.wheels.push(wheel);
        user.save();
        
        wheel = await wheel.populate('owner', '_id, email');
        return res.json(wheel);
    }
    catch(err) {
        next(err);
    }
});

// wheel delete
router.delete('/:id', restoreUser, async (req, res, next) => {
    try {
        const wheel = await Wheel.findById(req.params.id);
        if (!wheel.owner._id.equals(req.user._id)) {
            const error = new Error("Owner doesn't match");
            error.statusCode = 400;
            error.errors = { message: "Wheel cannot be removed by people other than owner" };
            return next(error);
        } else {
            wheel.delete(req.params.id);
            User.updateOne({_id: req.user._id}, {$pull: { wheels: req.params.id}}, (err, wheel) => {
                if (err) {
                    console.log(err);
                } else {
                    console.log("success")
                }
            });
        }

        return res.json(wheel);
    }
    catch(err) {
        const error = new Error('Wheel not found');
        error.statusCode = 404;
        error.errors = { message: "No wheel found with that id" };
        return next(error);
    }
});

// wheel update
router.patch('/:id', validateWheelInput,restoreUser, async (req, res, next) => {
    try {
        let wheel = await Wheel.findById(req.params.id);
        if (!wheel.owner._id.equals(req.user._id)) {
            const error = new Error("Owner doesn't match");
            error.statusCode = 400;
            error.errors = { message: "Wheel cannot be removed by people other than owner" };
            return next(error);
        } else {
            wheel = await Wheel.findByIdAndUpdate(
                { _id: req.params.id },
                { title: req.body.title, contents: req.body.contents });
        }
        wheel = await Wheel.findById(req.params.id);
        return res.json(wheel);

    }
    catch(err) {
        const error = new Error('Wheel not found');
        error.statusCode = 404;
        error.errors = { message: "No wheel found with that id" };
        return next(err);
    }
})

// wheels show
router.get('/:id', async (req, res, next) => {
    try {
        const wheel = await Wheel.findById(req.params.id)
            .populate('owner', '_id, email, firstName');
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
            // .populate("owner", "_id, email");
        return res.json(wheel);
    }
    catch(err) {
        return res.json([]);
    }
});

module.exports = router;