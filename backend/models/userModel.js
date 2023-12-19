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
    },

    password:{
        type:String,
        required:[true, "veuillez inserer votre Password"],
    },

    role:{
        type:String,
        default:"member",
    }, 
    },
    {
        timestamps:true,
    }


);

module.exports = mongoose.model("User", userSchema);