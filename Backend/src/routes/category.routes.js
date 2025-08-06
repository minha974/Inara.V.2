const express = require('express');
const router = express.Router();
const {body} = require('express-validator');
const Category = require('../models/category');
const { validate } = require('../middleware/validate.middleware');
const categoryController = require('../controllers/category.controller');

router.post('/create',
    [
        body('therapyName').notEmpty().withMessage('Name is required'),
        body('abbreviation').notEmpty().withMessage('set an abbreviation')
    ],
    validate,
    categoryController.createCategory
);


router.get('/all', categoryController.findAll);

router.get('/:id', async (req,res)=>{
    try {
        const category = await Category.findById(req.params.id);
        if(!category) return res.status(404).json({message:'User not found'});
        res.status(200).json(category);
    } catch (error) {
        res.status(500).json({message:'Error retrieving user'});
    }
});

module.exports = router;
