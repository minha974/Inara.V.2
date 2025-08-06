const express = require('express');
const router = express.Router();
const {body} = require('express-validator');
const {validate} = require('../middleware/validate.middleware');
const celebrationController = require('../controllers/celebration.controller');

router.post('/create',
    [
        body('userId').notEmpty().withMessage('Id needed'),
        body('birthDate').notEmpty().withMessage('Birth date is needed'),
        body('joiningDate').notEmpty().withMessage('Joining date is needed')   
    ],
    validate,celebrationController.createCelebration
);
module.exports = router;