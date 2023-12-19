const express = require("express-async-handler");
const role = require("../models/roleModel");

const getRoles = asyncHandler(async (req, res) => {
  
  const roles = await role.find();
  console.log(roles);
 
  res.status(200).json({
    roles,
    message: "getRoles Method from RoleController",
  });
});

module.exports = {
    getRoles,
}; 