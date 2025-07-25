const mongoose =  require('mongoose');
const assessmentFeeMasterSchema = new mongoose.Schema(
    {
        sessionMasterId:{type:mongoose.Schema.Types.ObjectId,ref:'assessmentMaster'},
        amountToBeCollected:{type:Number},
        collectedAmount:{type:Number,required:true},
        dateAndTime:{type:Date},
        receivedBy:{type:mongoose.Schema.Types.ObjectId, ref:'User'},
        paymentMode:{type:String,required:true},
        remarks:{type:String},
        paymentDate:{type:Date},

    }
)
const assessmentFeeMasterModel = mongoose.model('assessmentFeeMaster',assessmentFeeMasterSchema);
module.exports = assessmentFeeMasterModel;