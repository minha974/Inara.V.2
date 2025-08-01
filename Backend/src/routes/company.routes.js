const express = require('express');
const router = express.Router();
const User = require('../models/company');
const {body} = require('express-validator');
const { validate } = require('../middleware/validate.middleware');
const companyController = require('../controllers/company.controller');

router.post('/create',
[
    body('companyName').notEmpty().withMessage('Company name is required'),
    body('locationName').notEmpty().withMessage('Location name is required'),
    body('companyInChargeName').notEmpty().withMessage('Incharge name is required')
],
validate,companyController.createCompany
);
module.exports = router;

