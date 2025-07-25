const express = require("express");
const router = express.Router()
const User = require('../models/user');
const jwt = require("jsonwebtoken");
const bcrypt = require('bcrypt');
const {check,validationResult} = require("express-validator");


router.post('/register',
    [check('name','name is required').not().isEmpty(),
        check('emailId','Please enter valid Email').isEmail(),
        check('password','Password must be atleast 6 characters').isLength({min:6})
    ],  
    async(req,res)=>{
        console.log(req.body);
    // const{name,emailId,password,date,role,therapyCategory,companyId,sharePercentage,isSalaried,md} = req.body;
    // try {
    //     const salt = await bcrypt.genSalt(10)
    //     const hashedPassword = await bcrypt.hash(password,salt);
        
    //     const user = new User({
    //         name:name,
    //         emailId:emailId,
    //         password:hashedPassword,
    //         date:date,
    //         role:role,
    //         therapyCategory:therapyCategory,
    //         companyId:companyId,
    //         sharePercentage:sharePercentage,
    //         isSalaried:isSalaried,
    //         md:md,
    //     });
    //     await user.save();
    //     console.log(user);
    //     res.status(201).send(user);
    // } catch (error) {
    //     console.error(error.message);
    //     res.status(500).send({error:'Something went wrong'});
    // }
});

router.get('/',async(req,res)=>{
    try {
        const allusers = await User.find()
        res.json(allusers)
    } catch (error) {
        console.error(error.message);
        res.status(500).send({error:'Something went wrong'});      
    }
});
module.exports = router;
