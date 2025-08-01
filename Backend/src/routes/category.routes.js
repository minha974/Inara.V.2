const express = require('express');
const router = express.Router();
const {body} = require('express-validator');
const { validate } = require('../middleware/validate.middleware');
const categoryController = require('../controllers/category.controller');

router.post('/create',
    [
        body('therapyName').notEmpty().withMessage('Name is required'),
        body('abbreviation').notEmpty().withMessage('set an abbreviation')
    ],
    validate,categoryController.createCategory
);
module.exports = router;
