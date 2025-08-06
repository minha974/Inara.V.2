const { log } = require('node:console');
const Company = require('../models/company');

exports.createCompany = async(req,res,next)=>{
    try {
        const { companyName,locationName,companyInChargeName,gstNo,status } = req.body;
        const companyExist = await Company.findOne({companyName});
        console.log(companyExist);
        if(companyExist){
            return res.status(400).json({
                message:'Company name is already created'
            });
        }
        const company = new Company({
            companyName,
            locationName,
            companyInChargeName,
            gstNo,
            status
        });
        await company.save();
        res.send(company)
    } catch (error) {
        console.log(error);       
    }
};

exports.findAll = async(req,res,next)=>{
    try {
        const companies = await Company.find();
        res.json(companies);
    } catch (error) {
        next(error)
    }
};