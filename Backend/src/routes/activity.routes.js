const express = require('express');
const router = express.Router();
const {body} = require('express-validator');
const {validate} = require('../middleware/validate.middleware');
const activityController = require('../controllers/activity.controller');

router.post('/create',
    [
        body('sessionMasterId').notEmpty().withMessage('Id needed'),
        body('assignedDate').notEmpty().withMessage('Date needed'),
        body('activityStatus').notEmpty().withMessage('Status needed')
    ],
    validate,activityController.createActivity
);
module.exports = router;