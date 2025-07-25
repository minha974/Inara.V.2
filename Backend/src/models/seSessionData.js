const mongoose = require('mongoose');

const seSessionSchema = new mongoose.Schema({
    date:{type:Date,default:Date.now},
    updateDate:{type:Date,default:Date.now},
    sessionMasterId:{type:mongoose.Schema.Types.ObjectId,ref:'SessionMaster'},
    seDatas:[{
        goal:{type:mongoose.Schema.Types.ObjectId,ref:'SeGoal'},
        activities:{type:String},
        response:{type:String},
        notes:{type:String},
        status:{type:Boolean,default:false}
    }],

})
const seSessionModel = mongoose.model('SeSession',seSessionSchema);
module.exports = seSessionModel;