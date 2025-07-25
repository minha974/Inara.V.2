const mongoose = require('mongoose')
const companySchema = new mongoose.Schema({
    companyName:{type:String,required:true},
    locationName:{type:string},
    companyInChargeName:{type:String,required:true},
    gstNo:{type:string}
});
const companyModel = mongoose.model('Company',companySchema);
module.exports = companyModel