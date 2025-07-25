const mongoose = require('mongoose');
const ptSchema = new mongoose.Schema({
    clientId:{type:mongoose.Schema.Types.ObjectId,ref:'client'},
    height:{type:String},
    weight:{type:String},
    cheifComplaint:{type:String},
    imageUrl:{type:String},
    cloudinaryId:{type:String}
});

const ptModel = mongoose.model('Pt',ptSchema);
module.exports = ptModel; 