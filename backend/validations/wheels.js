const { check } = require("express-validator");
const handleValidationErrors = require('./handleValidationErrors');

const validateWheelInput = [
    check('contents')
    .exists({ checkFalsy: true })
    // .isLength( { min: 2, max: 10 } )
    .isArray( { min: 2, max: 10 } )
    .withMessage("Wheel contents must between 2 and 10"),
    handleValidationErrors
];

module.exports = validateWheelInput;