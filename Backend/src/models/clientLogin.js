const mongoose = require('mongoose');

const clientLoginSchema = new mongoose.Schema({
    clientID:{type:mongoose.Schema.Types.ObjectId, ref:'client'},
    client_ID:{type:String},
    password:{type:String, required:true},
    image_url:{type:String},
    cloudinary_id:{type:String}
});
const clientLoginModel = mongoose.model('ClientLogin',clientLoginSchema);
module.exports = clientLoginModel;