const express = require("express-async-handler");
const token = require("../models/tokenModel");

const getTokens = asyncHandler(async (req, res) => {
  const users = await token.find();
 
  res.status(200).json({
    users: users,
    message: "getTokens Method from tokenController",
  });
});

module.exports = {
    getTokens,
}; 