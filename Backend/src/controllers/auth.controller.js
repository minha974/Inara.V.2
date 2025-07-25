const jwt = require('jsonwebtoken')
const User = require('../models/user');

exports.register = async (req,res,next) =>{
    try {
        const { username, emailId, password, firstName, lastName } = req.body;

        const existingUser = await User.findOne({
            $or:[{emailId},{username}]
        });
        if(existingUser){
            return res.status(400).json({
                message:'User with this email or username already exists'
            });
        }
        const user = new User({
            username,
            emailId,
            password,
            firstName,
            lastName,
            roles:['User','Administrator']
        });
        await user.save();

        const accessToken = jwt.sign(
            {
                sub:user._id,
                username:user.username,
                emailId:user.emailId,
                roles:user.roles
            },
            process.env.JWT_SECRET,
            { expiresIn: process.env.JWT_EXPIRES_IN}
        );

        const refreshToken = jwt.sign(
            {sub:user._id},
            process.env.JWT_SECRET,
            {expiresIn:'7d'}
        );

        res.status(201).json({
            accessToken,
            refreshToken,
            user:{
                id:user._id,
                username:user.username,
                emailId:user.emailId,
                firstName:user.lastName,
                roles:user.roles,
                status: user.status,
                profilePicture:user.profilePicture
            }
        });
    } catch (error) {
        next(error);
    }
};