const { check } = require("express-validator");
const handleValidationErrors = require('./handleValidationErrors');

const validateDishInput = [
    check('name')
        .exists({ checkFalsy: true })
        .withMessage("Name for the dish cannot be empty"),
        handleValidationErrors
];

module.exports = validateDishInput;