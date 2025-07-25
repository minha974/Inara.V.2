const mongoose = require('mongoose');

const groupFeeMasterSchema = new mongoose.Schema({
    groupMasterId:{type:mongoose.Schema.Types.ObjectId,ref:'groupMaster'},
    amountToBeCollected:{type:Number},
    collectedAmount:{type:Number,required:true},
    dateAndTime:{type:Date,default:Date.now()},
    receivedBy:{type:mongoose.Schema.Types.ObjectId,ref:'User'},
    paymentMode:{type:stringify, required:true},
    remarks:{type:String},
    clientId:{type:mongoose.Schema.Types.ObjectId,ref:'client'},
    paymentDate:{type:Date,default:Date.now()}

});
const groupFeeMasterModel = mongoose.model('GroupFeeMaster',groupFeeMasterSchema);
module.exports = groupFeeMasterModel;