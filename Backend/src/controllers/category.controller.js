const Category = require('../models/category');

exports.createCategory = async (req,res,next)=>{
    try {
        const{ therapyName, abbreviation } = req.body;
        const recentCategory = await Category.findOne({therapyName});
        console.log(recentCategory);
        if(recentCategory){
            return res.status(400).json({
                message:"This Therapy already exist",
            });
        }
        const category = new Category({
            therapyName,
            abbreviation
        });
        await category.save();
        res.send(category);
    } catch (error) {
        console.log(error);
    }
}