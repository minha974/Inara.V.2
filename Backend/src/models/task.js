const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    sessionMaster:{type:mongoose.Schema.Types.ObjectId,ref:'SessionMaster'},
    tasks:[{
        date:{type:String},
        task:{type:String, default:'abcd'},
        completedDate:{type:Date},
        point:{type:Number},
        status:{type:String,default:'Pending'},
        response:{type:String},
        cloudinaryId:{type:String},
        fileUrl:{type:String},
        taskCloudinaryId:{type:String},
        taskFileUrl:{type:String}

    }],
    assignedDate:{type:Date,default:Date.now()},
    taskStatus:{type:String,default:'Assigned'}
});

const taskModel = mongoose.model('Task',taskSchema);
module.exports = taskModel;