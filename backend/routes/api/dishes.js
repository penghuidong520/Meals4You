const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const User = mongoose.model('User');
const Dish = mongoose.model('Dish');
const { requireUser, restoreUser } = require('../../config/passport');
const Wheel = require('../../models/Wheel');
const validateDishInput = require('../../validations/dishes');

// all dishes
router.get('/', async (req, res) => {
    try {
        const dishes = await Dish.find()
            .populate("owner", "_id, email")
            .sort({ createdAt: -1 });
        return res.json(dishes);
    }
    catch(err) {
        return res.json([]);
    }
})

// create dish under user
router.post('/', validateDishInput, restoreUser, async (req, res, next) => {
    try {
        
        const newDish = new Dish({
            owner: req.user._id,
            name: req.body.name,
            description: req.body.description
        });
        let dish = await newDish.save();
        const user = await User.findById(req.user._id);
        user.dishes.push(dish);
        user.save();
        
        dish = await dish.populate('owner', '_id, email');
        return res.json(dish);
    }
    catch(err) {
        next(err);
    }
})

// delete dish
router.delete('/:id', restoreUser, async (req, res, next) => {
    try {
        const dish = await Dish.findById(req.params.id);
        console.log(dish.owner === req.user);
        console.log(dish.owner._id);
        console.log(req.user._id);
        console.log(req.user._id.equals(dish.owner._id));
        if (!dish.owner._id.equals(req.user._id)) {
            const error = new Error("Owner doesn't match");
            error.statusCode = 400;
            error.errors = { message: "Dish cannot be removed by people other than owner" };
            return next(error);
        } else {
            dish.delete(req.params.id)
            User.updateOne({_id: req.user._id}, {$pull: {dishes: req.params.id}}, (err, wheel) => {
                if (err) {
                    console.log(err);
                } else {
                    console.log('success');
                }
            });
        }
        return res.json(dish);
    }
    catch(err) {
        const error = new Error('Dish not found');
        error.statusCode = 404;
        error.errors = { message: "No dish found with that id" };
        return next(error);
    }
});

// update dish
router.patch('/:id', validateDishInput, restoreUser, async (req, res, next) => {
    try {
        let dish = await Dish.findById(req.params.id);
        if (!dish.owner._id.equals(req.user._id)) {
            const error = new Error("Owner doesn't match");
            error.statusCode = 400;
            error.errors = { message: "Dish cannot be removed by people other than owner" };
            return next(error);
        } else {
            dish = await Dish.findByIdAndUpdate(
                {_id: req.params.id},
                {name: req.body.name, description: req.body.description}
                );
            return res.json(dish)
        }
    }
    catch (err) {
        const error = new Error('Dish not found');
        error.statusCode = 404;
        error.errors = { message: "No dish found with that id" };
        return next(error);
    }
});

// dish show
router.get('/:id', async (req, res, next) => {
    try {
        const dish = await Dish.findById(req.params.id)
            .populate('owner', '_id, email');
        return res.json(dish);
    }
    catch (err) {
        const error = new Error('Dish not found');
        error.statusCode = 404;
        error.errors = { message: "No dish found with that id" };
        return next(error);
    }
});

// user dish index
router.get('user/:userId', async (req, res, next) => {
    let user;
    try {
        user = await User.findById(req.params.userId);
    }
    catch (err) {
        const error = new Error('User not found');
        error.statusCode = 404;
        error.errors = { message: "No user found with that id" };
        return next(error);
    }

    try {
        const dishes = await Dish.find({owner: user._id})
            .sort({ createdAt: -1 });
        return res.json(dishes);
    }
    catch(err) {
        return res.json([]);
    }
});

module.exports = router;