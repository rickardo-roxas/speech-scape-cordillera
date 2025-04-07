const { check, validationResult } = require('express-validator');

// Middleware for validating search query for province
const validateProvinceSearch = [
    
    // Validate the 'province' query parameter
    check('province')
        .exists().withMessage('Province is required.')
        .isString().withMessage('Province must be a string.')
        .trim()
        .isLength({ min: 1 }).withMessage('Province must be at least 1 character long.')
        .isAlphanumeric().withMessage('Province should only contain letters and numbers.'),

    // Check for validation errors
    async (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next(); // Proceed to the next middleware or route handler
    }
];

module.exports = validateProvinceSearch;
