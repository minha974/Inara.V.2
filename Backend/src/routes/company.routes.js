const express = require('express');
const router = express.Router();
const Company = require('../models/company');
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

router.get('/all', companyController.findAll);

router.get('/:id', async (req,res)=>{
    try {
        const company = await Company.findById(req.params.id); 
        if(!company) return res.status(404).json({message:'User not found'});
        res.status(200).json(company);
    } catch (error) {
        res.status(500).json({message:'Error retrieving user'});
    }
}

);

module.exports = router;

