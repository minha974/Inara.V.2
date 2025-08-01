const mongoose = require('mongoose');

const activitySchema = new mongoose.Schema(
    {
        sessionMasterId:{ type:mongoose.Schema.Types.ObjectId, ref:'SessionMaster'},
        assignedDate:{type:Date,default:Date.now()},
        activityStatus:{type:Boolean,default:false},
        activityDetails : [{
            activity:{type:String,default:'abcd'},
            response:{type:String},
            status:{type:Boolean,default:false},
        }],
    }
);
const activityModel = mongoose.model('Activity',activitySchema)
module.exports = activityModel;