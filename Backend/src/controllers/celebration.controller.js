const Celebration = require('../models/celebration');

exports.createCelebration = async(req,res,next)=>{
    try {
        const { userId, birthDate, joiningDate } = req.body;
        const currentCelebration = await Celebration.findOne({userId});
        console.log(currentCelebration);
        if(currentCelebration){
            return res.status(400).json({
                message:'User is already exist'
            });
        }
        const celebration = new Celebration({
            userId,
            birthDate,
            joiningDate
        });
        await celebration.save();
        res.send(celebration)
    } catch (error) {
        console.log(error);
    }
}