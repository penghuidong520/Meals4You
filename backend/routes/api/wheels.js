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

// favorite wheel
router.post('/favorite/:id', restoreUser, async (req, res, next) => {
    try {
        console.log(1);
        const favWheel = await Wheel.findById(req.params.id);
        console.log(req.params.id);
        console.log(favWheel);
        const favorator = await User.findById(req.user._id);
        console.log(!favorator.favoriteWheels.includes(favWheel));
        if (!favorator.favoriteWheels.includes(favWheel)) {
            favorator.favoriteWheels.push(favWheel);
            favorator.save();
        } else {
            const error = new Error("Wheel already exists in User favorites");
            error.statusCode = 400;
            error.errors = { message: "User already have this wheel as favorite" };
            return next(error);
        }
        return res.json(favWheel);
    }
    catch(err) {
        const error = new Error('Wheel or User not found');
        error.statusCode = 404;
        error.errors = { message: "No wheel or user found with that id" };
        return next(error);
    }
});

// delete favorite
router.delete('/favorite/:id', restoreUser, async (req, res, next) => {
    try {
        const user = await User.findById(req.user._id);
        let favWheel;
        user.favoriteWheels.forEach((wheel) => {
            if (wheel._id === req.params.id) favWheel = wheel
        })
        const index = user.favoriteWheels.indexOf(favWheel)
        user.favoriteWheels.splice(index, 1);
        user.save();
        return res.json(favWheel);
    }
    catch(err) {
        return next(err)
    }
})

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