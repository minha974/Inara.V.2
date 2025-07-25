const mongoose = require('mongoose');

const feeMasterSchema = new mongoose.Schema(
    {
        sessionMasterId:{type:mongoose.Schema.Types.ObjectId,ref:'SessionMaster',required:false},
        lmcId:{type:mongoose.Schema.Types.ObjectId,ref:'Lmc',required:false},
        groupMasterID:{type:mongoose.Schema.Types.ObjectId,ref:'GroupMaster',required:false},
        sessionType:{type:String,required:true},
        amountToBeCollected:{type:Number},
        collectedAmount:{type:Number,required:true},
        dateAndTime:{type:Date},
        paymentAndDate:{type:Date},
        receivedBy:{type:mongoose.Schema.Types.ObjectId,ref:'User'},
        paymentMode:{type:String,required:true},remarks:{type:String},
        remarks:{type:String},
        cloudinaryId:{type:String},
        fileUrl:{type:String},
        collectedTo:{type:String},
        arrayId:{type:String},

    }
);
const feeMasterModel = mongoose.model('feeMaster',feeMasterSchema);
module.exports = feeMasterModel