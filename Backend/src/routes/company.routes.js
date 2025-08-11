const express = require('express');
const router = express.Router();
const Company = require('../models/company');
const {body} = require('express-validator');
const { validate } = require('../middleware/validate.middleware');
const companyController = require('../controllers/company.controller');
// const authToken = require('../routes/verifyToken');

router.post('/create',
[
    body('companyName').notEmpty().withMessage('Company name is required'),
    body('locationName').notEmpty().withMessage('Location name is required'),
    body('companyInChargeName').notEmpty().withMessage('Incharge name is required')
],
validate,companyController.createCompany
);

router.get('/all', companyController.findAll);

router.get('/:id', async (req,res)=>{
    try {
        const company = await Company.findById(req.params.id); 
        if(!company) return res.status(404).json({message:'User not found'});
        res.status(200).json(company);
    } catch (error) {
        res.status(500).json({message:'Error retrieving user'});
    }
}

);


// router.get('/search/:letter', async(req,res)=>{
//     try {
//         const letter = req.params.letter;

//         const companies = await Company.find({
//            companyName: { $regex: '^' + letter, $options: 'i' }

//         });
//         res.status(200).json(companies);
//     } catch (error) {
//         res.status(500).json({message:'Error during search',error:error.message});
//     }
// });

// router.get('/search/:letter', async (req, res) => {
//     try {
//         const letter = req.params.letter.trim();
//         console.log("Searching for company with filter:", letter);

//         const companies = await Company.find({
//             companyName: { $regex: letter, $options: 'i' }    
//         });

//         res.setHeader('Cache-Control', 'no-store');
//         res.status(200).json(companies);
//     } catch (error) {
//         res.status(500).json({ message: 'Error during search', error: error.message });
//     }
// });

router.get('/search/:fname',async(req,res)=>{
    const fname = req.params.fname
    console.log(fname);

    const company = await Company.find({
        "$or":[
            {firstName:{$regex:fname,$options:'i'}}
        ]

    }).select({"firstName": 1,"_id":1});
    res.send(company)
});

module.exports = router;




module.exports = router;

