const mongoose = require('mongoose');
const { type } = require('os');
const leaveSlotSchema = new mongoose.Schema({
    leaveDate:{type:Date},
    slots:[{
        slotId:{type:mongoose.Schema.Types.ObjectId,ref:'Slot'},
        status:{type:Boolean}
    }]
});
const leaveSlotModel = mongoose.model('LeaveSlot',leaveSlotSchema);
module.exports = leaveSlotModel;