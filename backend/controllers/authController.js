const asyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const tokenKey = process.env.TOKEN_KEY;

const register = (req,res) => {
  res.status(200).json({
    message:"register method from authCONTROLLER",
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