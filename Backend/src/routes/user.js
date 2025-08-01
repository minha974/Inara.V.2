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
module.exports = router;
