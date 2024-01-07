const mongoose = require('mongoose');

const userSchema=mongoose.Schema(
    {
    name:{
        type:String,
        required:[true, "veuillez inserer votre nom"],
    },

    email:{
        type:String,
        required:[true, "veuillez inserer votre Email"],
        unique:true,
        lowercase: true,
    },

    password:{
        type:String,
        required:[true, "veuillez inserer votre Password"],
        // select: false, 
    },
    photo:{
        type:String,
       
    },

    role:{
        type: mongoose.Types.ObjectId,
        ref: "Role",
    }, 
    token: {
        type: mongoose.Types.ObjectId,
        ref:"Token",
    }
    },
    {
        timestamps:true,
    }


);

module.exports = mongoose.model("User", userSchema);