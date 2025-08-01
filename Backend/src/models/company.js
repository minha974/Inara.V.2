const mongoose = require('mongoose');
const { type } = require('os');
const companySchema = new mongoose.Schema({
    companyName:{type:String,required:true},
    locationName:{type:String},
    companyInChargeName:{type:String,required:true},
    gstNo:{type:String},
    status:{type:Boolean}
});
const companyModel = mongoose.model('Company',companySchema);
module.exports = companyModel