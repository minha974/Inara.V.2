const mongoose = require('mongoose');
stSkillSchema = new mongoose.Schema({
    sessionId:{type:mongoose.Schema.Types.ObjectId,ref:'Session'},
    skill:{type:String},
    status:{type:Boolean,default:false}
});
const stSkillModel = mongoose.model('stSkill',stSkillSchema);
module.exports = stSkillModel;