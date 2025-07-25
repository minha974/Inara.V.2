const User = require('../models/user');

exports.getCurrentUser = async (req,res,next)=>{
    try {
        const user = await User.findById(req.user.sub).select('-password');
        if(!user){
            return res.status(404).json({message:'User not found'});
        }
        res.json(user);
    } catch (error) {
        next(error);
    }
};

exports.updateProfile = async(req,res,next)=>{
    try {
        const { firstName,lastName,emailId,username } = req.body;
        const user = await User.findById(req.user.sub);
        if(!user){
            return res.status(404).json({message:'User not found'});
        }
        if(emailId && emailId !==user.emailId){
            const emailExists = await User.findOne({emailId,_id:{$ne: user._id}});
            if(emailExists){
                return res.status(400).json({message:'Email is already taken'});
            }
            user.emailId = emailId;
        }
        if(username && username !== user.username){
            const usernameExists = await User.findOne({username,_id:{$ne:user._id}});
            if(usernameExists){
                return res.status(400).json({message:'Username is already taken'});
            }
            user.username = username;
        }
        user.firstName = firstName || user.firstName;
        user.lastName = lastName || user.lastName;

        await user.save();

        const updatedUser = user.toObject();
        delete updatedUser.password;

        res.json(updatedUser);

    } catch (error) {
        next(error);
    }
};


exports.changePassword = async (req,res,next) => {
    try {
        const { currentPassword, newPassword } = req.body;
        const user = await User.findById(req.user.sub);
        if(!user){
            return res.status(404).json({message:'User not found'});
        }
        const isMatch = await user.comparePassword(currentPassword);
        if(isMatch){
            return res.status(400).json({message:'Current password is incorrect'});
        }
        user.password = newPassword;
        await user.save();

        res.json({message:'Password updated successfully'});

    } catch (error) {
        next(error);       
    }
};

exports.getUserById = async (req,res,next)=>{
    try {
        const user = await User.findById(req.params.id).select('-password');
        if(!user){
            return res.status(404).json({message:'User not found'});
        }
        res.json(user);
    } catch (error) {
        next(error);       
    }
};

exports.updatedUser = async (req,res,next) =>{
    try {
        const { roles,status } = req.body;
        const user = await User.findById(req.params.id);
        if(!user){
            return res.status(404).json({ message:'User not found'});
        }
        if(roles) user.roles = roles;
        if(status) user.status = status;

        await user.save();

        const updatedUser = user.toObject();
        delete updatedUser.password;

        res.json(updatedUser);
    } catch (error) {
        next(error);
    }
};

exports.deleteUser = async(req,res,next)=>{
    try {
        const user = await User.findById(req.params.id);
        if(!user){
            return res.status(404).json({message:'User not found'});
        }
        await user.deleteOne();
        res.json({message:'User deleted successfully'});
    } catch (error) {
        next(error);
    }
};