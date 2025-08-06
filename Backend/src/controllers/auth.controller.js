const jwt = require('jsonwebtoken');
const User = require('../models/user');


exports.getUsersPaginated = async(req,res)=>{
    try {
        const options = {
            page:parseInt(req.query.page) || 1,
            limit:parseInt(req.query.limit) || 10,
            populate:{
                path:'therapyCategory',
                select:'therapyName'
            }
        };

        const result = await User.paginate({},options);
        res.json(result);
    } catch (error) {
        console.log(error);
        res.status(500).json({error:'Internal server error'});
    }
};

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

    const populatedUser = await User.findById(user._id)
    .populate({
        path:'therapyCategory',
        select:'therapyName'
    });
    res.status(201).json(populatedUser);
    // res.send(user)
   } catch (error) {
    next(error)
   }
  
};