const mongoose = require('mognoose');
var moment =  require('moment');

const assessmentSchema = new mongoose.Schema(
    {
        slotName:{type: mongoose.Schema.Types.ObjectId,ref:'Slot'},
        clientName:{type: mongoose.Schema.Types.ObjectId,ref:'client'},
        assessmentDate:{type: Date,required:true},
        therapistName:{type:mongoose.Schema.Types.ObjectId,ref:'User'},
        status:{type:Boolean,default:false},
        remarks:{type:String},
        endDate:{type:Date},
         
    }
)