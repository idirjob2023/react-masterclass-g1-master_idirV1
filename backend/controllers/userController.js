const express = require("express-async-handler");
const user= require("../models/userModel");

const getUsers = asyncHandler(async (req, res) => {
  const users = await user.find().populate("role").populate("token").exec();
 
  res.status(200).json({
    users: users,
    message: "getUsers from users controller",
  });
});

module.exports = {
    getUsers,
}; 