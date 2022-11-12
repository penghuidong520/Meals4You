const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const User = mongoose.model('User');
const { requireUser, restoreUser } = require('../../config/passport');
const Favorite = mongoose.model('Favorite');
const Wheel = mongoose.model('Wheel');

const validateWheelInput = require('../../validations/wheels');

// favorite index
router.get('/', restoreUser, async (req, res) => {
    try {
        const favorites = await Favorite.find({"favoritor": req.user._id});
        return res.json(favorites);
    }
    catch(err) {
        return res.json(err);
    }
});

// favoriteWheel update takes in favoriteId as params
router.patch('/:id', validateWheelInput, restoreUser, async (req, res, next) => {
    try {
        let favorite = await Favorite.findById(req.params.id);
        if (!favorite.favoritor._id.equals(req.user._id)) {
            const error = new Error("Owner doesn't match");
            error.statusCode = 400;
            error.errors = { message: "Favorite cannot be Edited by people other than favoritor" };
            return next(error);
        } else {
            favorite = await Favorite.findByIdAndUpdate(
                { _id: req.params.id },
                { title: req.body.title, contents: req.body.contents });
        }
        favorite = await Favorite.findById(req.params.id);
        return res.json(favorite);

    }
    catch(err) {
        const error = new Error('Favorite not found');
        error.statusCode = 404;
        error.errors = { message: "No favorite wheel found with that id" };
        return next(err);
    }
})

// favorite wheel takes in wheelId as Param
router.post('/:id', restoreUser, async (req, res, next) => {
    try {
        const wheel = await Wheel.findById(req.params.id);
        const newFavorite = new Favorite({
            title: wheel.title,
            contents: wheel.contents,
            owner: wheel.owner,
            wheelId: wheel._id,
            favoritor: req.user._id
        })
        const favoritor = await User.findById(req.user._id);

        // check if user already have this wheel as favorite
        const exists = await Favorite.find({"favoritor": req.user._id, "wheelId": wheel._id});

        // save favorite wheel and push to user's favorite list
        if (exists.length === 0) {
            const favWheel = await newFavorite.save();
            favoritor.favoriteWheels.push(favWheel);
            await favoritor.save();
        } else {
            const error = new Error("Wheel already exists in User favorites");
            error.statusCode = 400;
            error.errors = { message: "User already have this wheel as favorite" };
            return next(error);
        }
        return res.json(newFavorite);
    }
    catch(err) {
        const error = new Error('Wheel or User not found');
        error.statusCode = 404;
        error.errors = { message: "No wheel or user found with that id" };
        return next(error);
    }
});

// delete favorite takes in favoriteId as Param
router.delete('/:id', restoreUser, async (req, res, next) => {
    try {
        const favorite = await Favorite.findById(req.params.id);
        if (!favorite.favoritor.equals(req.user._id)) {
            const error = new Error("Owner doesn't match");
            error.statusCode = 400;
            error.errors = { message: "Favorite cannot be removed by people other than favoritor" };
            return next(error);
        } else {
            favorite.delete(req.params.id);
            User.updateOne({_id: req.user._id}, {$pull: { favoriteWheels: req.params.id}}, (err, favorite) => {
                if (err) {
                    console.log(err);
                } else {
                    console.log("success")
                }
            });
        }

        return res.json(favorite);
    }
    catch(err) {
        const error = new Error('Favorite not found');
        error.statusCode = 404;
        error.errors = { message: "No favorite found with that id" };
        return next(error);
    }
    // try {
    //     const user = await User.findById(req.user._id);
    //     let favWheel;
    //     user.favoriteWheels.forEach((favorite) => {
    //         if (favorite._id === req.params.id) favWheel = favorite
    //     })
    //     const index = user.favoriteWheels.indexOf(favWheel)
    //     user.favoriteWheels.splice(index, 1);
    //     user.save();
    //     return res.json(favWheel);
    // }
    // catch(err) {
    //     return next(err)
    // }
});

module.exports = router;