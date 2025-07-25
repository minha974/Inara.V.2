const mongoose = require('mongoose');
const { type } = require('node:os');
const sessionSchema = new mongoose.Schema(
    {
        slotName:{type:mongoose.Schema.Types.ObjectId,ref:'Slot'},
        clientName:{type:mongoose.Schema.Types.ObjectId,ref:'client'},
        therapistName:{type:mongoose.Schema.Types.ObjectId,ref:'User'},
        status:{type:Boolean,default:false},
        date:{type:Date},
        fees:{type:Number},
        discount:{type:Number}
    }
)

const sessionModel = mongoose.model('Session',sessionSchema);
module.exports = sessionModel;