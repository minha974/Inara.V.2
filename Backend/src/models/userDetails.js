const mongoose = require('mongoose');
const userDetailSchema = new mongoose.Schema({
    qualification:[{
            qualification:{type:String}
        }],
        experiances:[{
            experiance:{type:String}
        }],
        idProof:{type:String},
        cloudinary_id:{type:String},
        file_url:{type:String},
        userId:{type:mongoose.Schema.Types.ObjectId, ref:'User'},
        qualification_id:{type:String},
        qualification_file:{type:String},
        idProof_id:{type:String},
        idProof_file:{type:String},
        experiance_id:{type:String},
        experiance_file:{type:String},   
});
const userDetailModel = mongoose.model('UserDetails',userDetailSchema);
module.exports = userDetailModel;