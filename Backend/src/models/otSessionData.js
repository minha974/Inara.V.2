const mongoose = require('mongoose');
const sensoryModulationSchema = new mongoose.Schema({
    threshold:{
        remarks:{type:String},
        key:{type:String},
        prompt:{type:String},
    },
    arousal:{
        remarks:{type:String},
        key:{type:String},
        prompt:{type:String},
    }
});

const proprioceptiveDiscriminationSchema = new mongoose.Schema({
    remarks:{type:String},
        key:{type:String},
        prompt:{type:String},
});

const vestibularDiscriminationSchema = new mongoose.Schema({
    remarks:{type:String},
        key:{type:String},
        prompt:{type:String},
});
const tactileDiscriminationSchema = new mongoose.Schema({
    toolManipulation:
    {remarks:{type:String},
        key:{type:String},
        prompt:{type:String}},
        visionOccluded:{
            remarks:{type:String},
        key:{type:String},
        prompt:{type:String}
        }
});

const visualSchema = new mongoose.Schema({
    actuity:{
        remarks:{type:String},
        key:{type:String},
        prompt:{type:String},
    },
    eyeStrain:{
        remarks:{type:String},
        key:{type:String},
        prompt:{type:String},
    },
    quickLocalisation:{
        remarks:{type:String},
        key:{type:String},
        prompt:{type:String},
    },
    generalEyeMovements:{
        remarks:{type:String},
        key:{type:String},
        prompt:{type:String},
    },
    dissociation:{
        remarks:{type:String},
        key:{type:String},
        prompt:{type:String},
    },
    perceptual:{
        remarks:{type:String},
        key:{type:String},
        prompt:{type:String},
    }
});

const posturalSchema = new mongoose.Schema({
    muscleTone:{
        remarks:{type:String},
        key:{type:String},
        prompt:{type:String},
    },
    reflex:{
        remarks:{type:String},
        key:{type:String},
        prompt:{type:String},
    },
    endurance:{
        remarks:{type:String},
        key:{type:String},
        prompt:{type:String}
    },
    posturalControl:{
        remarks:{type:String},
        key:{type:String},
        prompt:{type:String},
    },
    gait:{
        remarks:{type:String},
        key:{type:String},
        prompt:{type:String}
    }
});

const bilateralIntegrationschema = new mongoose.Schema({
    midlineCrossing:{
        remarks:{type:String},
        key:{type:String},
        prompt:{type:String}
    },
    symmetrical:{
        remarks:{type:String},
        key:{type:String},
        prompt:{type:String}
    },
    asymmetrical:{
        remarks:{type:String},
        key:{type:String},
        prompt:{type:String}
    },
    reciprocal:{
        remarks:{type:String},
        key:{type:String},
        prompt:{type:String}
    }
});

const praxiSchema = new mongoose.model({
    ideation:{
        remarks:{type:String},
        key:{type:String},
        prompt:{type:String},
    },
    motorPlanning:{
        remarks:{type:String},
        key:{type:String},
        prompt:{type:String}
    },
    execution:{
        remarks:{type:String},
        key:{type:String},
        prompt:{type:String}
    }
});
const grossMotorSchema = new mongoose.Schema({
    remarks:{type:String},
        key:{type:String},
        prompt:{type:String}
});
const fineMotorschema = new mongoose.Schema({
    strength:{remarks:{type:String},
        key:{type:String},
        prompt:{type:String}
    },
    grip:{
        remarks:{type:String},
        key:{type:String},
        prompt:{type:String}
    },
    isolationWrist:{
        remarks:{type:String},
        key:{type:String},
        prompt:{type:String}
    },
    isolationFingers:{
        remarks:{type:String},
        key:{type:String},
        prompt:{type:String}
    }

});
const auditoryAndLanguageSchema = new mongoose.Schema({
    articulation:{
        remarks:{type:String},
        key:{type:String},
        prompt:{type:String}
    },
    followingInstructions:{
        remarks:{type:String},
        key:{type:String},
        prompt:{type:String},
    }
});
const adlSchema = new mongoose.Schema({
    remarks:{type:String},
        key:{type:String},
        prompt:{type:String}
});
const emotionalSchema = new mongoose.model({
    remarks:{type:String},
        key:{type:String},
        prompt:{type:String}
});

const otSessionSchema = new mongoose.Schema({
    date:{type:Date,default:Date.now},
    updatedDate:{type:Date,default:Date.now},
    sessionMasterId:{ type:mongoose.Schema.Types.ObjectId,ref:'sessionMaster'},
    sensoryModulation:sensoryModulationSchema,
    proprioceptiveDiscrimination:proprioceptiveDiscriminationSchema,
    vestibularDiscrimination:vestibularDiscriminationSchema,
    tactileDiscrimination:tactileDiscriminationSchema,
    visual:visualSchema,
    postural:posturalSchema,
    grossMotor:grossMotorSchema,
    fineMotor:fineMotorschema,
    auditoryAndLanguage:auditoryAndLanguageSchema,
    adl:adlSchema,
    emotional:emotionalSchema 
});
const OtSessionModel = mongoose.model('OtSession',otSessionSchema);
module.exports = OtSessionModel;


