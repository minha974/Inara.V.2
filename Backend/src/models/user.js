const mongoose = require("../assets/database");
const userSchema = new mongoose.Schema({
    name:{type:String,required:true,min:6,max:255},
    emailId:{type:String,required:true,min:6,max:255},
    password:{type:String,required:true,min:6,max:1024},
    date:{type:Date,default:Date.now()},
    role:{type:String,required:true,min:6,max:255},
    therapyCategory:{type:mongoose.Schema.Types.ObjectId,ref:'Category'},
    companyId:{type:mongoose.Schema.Types.ObjectId, ref:'Company'},
    sharePercentage:{type:Boolean},
    isSalaried:{type:Boolean},
    md:{type:Boolean,default:false},   
});
const userModel = mongoose.model("User",userSchema);
module.exports = userModel;