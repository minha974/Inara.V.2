const express = require("express");
const router = express.Router()
const User = require('../models/user');
const jwt = require("jsonwebtoken");
const bcrypt = require('bcrypt');
const {check,validationResult} = require("express-validator");
const {body} = require('express-validator');
const { validate } = require("../middleware/validate.middleware");
const authController = require('../controllers/auth.controller')


router.post('/register',
    [check('name','name is required').not().isEmpty(),
        check('emailId','Please enter valid Email').isEmail(),
        check('password','Password must be atleast 6 characters').isLength({min:6})
    ],
    validate,authController.register
    
);
router.get('/users', async (req, res) => {
    try {
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 10;

        const skip = (page - 1)*limit;

        const users = await User.find()
        .skip(skip)
        .limit(limit)
        .populate('therapyCategory','therapyName');

        const total = await User.countDocuments();

        res.json({
            page,
            limit,
            totalPages:Math.ceil(total/limit),
            totalUsers:total,
            users
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({error:'Server error'});
    }
});

router.get('/users/:id', async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) return res.status(404).json({ message: "User not found" });
        res.status(200).json(user);
    } catch (err) {
        res.status(500).json({ message: "Error retrieving user" });
    }
});




module.exports = router;
