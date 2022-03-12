const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    name:{
        type:String,
        required:[true, "You must add your name"],
        trim: true,
    },
    linkedIn:{
        type:String,
    },
    git:{
        type:String,
    },
    email:{
        type:String,
        required:[true, "You must add your email"],
        unique:true,
    },
    college:{
        type:String,
    },
    techSkill:{
        type:String,
        //required: [true, "Must provide atleast one technical Skill"]
    },
    note:{
        type: String,
    },
    hackathon:{
        type:String,
    }
});

const User = mongoose.model("Users", userSchema);



module.exports = User;