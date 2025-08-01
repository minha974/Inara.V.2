const Activity = require('../models/activity');

exports.createActivity = async(req,res,next)=>{
    try {
        const{ sessionMasterId,assignedDate,activityStatus } = req.body;
        const recentActivity = await Activity.findOne({sessionMasterId});
        console.log(recentActivity);
        if(recentActivity){
            return res.status(400).json({
                message:"Activity already exist"
            });
        }
        const activity = new Activity({
            sessionMasterId,
            assignedDate,
            activityStatus,
            activityDetails:[

            ],
        });
        await activity.save();
        res.send(activity);
    } catch (error) {
        console.log(error);
    }
}