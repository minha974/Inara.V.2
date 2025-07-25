const mongoose = require('mongoose');

const waitingListSchema = new mongoose.Schema(
    {
        clientId:{type:mongoose.Schema.Types.ObjectId,ref:'client'},
        sessionId:{type:mongoose.Schema.Types.ObjectId,ref:'Assessment',required:false},
        date:{type:Date},
    }
);
const waitingListModel = mongoose.model('WaitingList',waitingListSchema);
module.exports = waitingListModel;