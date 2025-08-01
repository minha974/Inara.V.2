const jwt = require('jsonwebtoken');
const User = require('../models/user');

exports.register = async (req,res,next) =>{
   try {
    const{name,emailId,password,date,role,therapyCategory,companyId,sharePercentage,isSalaried,md} = req.body;
    const existingUser = await User.findOne({
        $or:[{emailId},{name}]
    });
    if(existingUser){
        return res.status(400).json({
            message:"Username or email address already taken"
        });
    }
    const user = new User({
        name,
        emailId,
        password,
        date,
        role,
        therapyCategory,
        companyId,
        sharePercentage,
        isSalaried,
        md
    });
    await user.save();
    res.send(user)
   } catch (error) {
    next(error)
   }
  
};