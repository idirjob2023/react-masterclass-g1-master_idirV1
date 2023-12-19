const asyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const tokenKey = process.env.TOKEN_KEY;

const user = require("../models/userModel");

const register = (req,res) => {
    const newUser = user.create({
        name:"ch3",
        email:"ch3@gmail.com",
        password:"12345769",
        role:"mombre",
    });
  
    res.status(200).json({
    message:"register method with succee ",
  });
};

const login = (req, res) => {
 res.status(200).json({
    message:"Login method from authCONTROLLER",
});
};

module.exports = {
    register, login,
}