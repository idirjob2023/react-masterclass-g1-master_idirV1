const asyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const tokenKey = process.env.TOKEN_KEY;

const User = require("../models/userModel");
const Role = require("../models/roleModel");
const Token = require("../models/tokenModel");

// generate jwt token
const generateToken = (id, role) => {
  return jwt.sign({ id, role }, tokenKey, { expiresIn: "10d" });
};

// @[  POST,  /api/auth/register, public,  register new user ]
const register = asyncHandler(async (req, res) => {
  const newRole = await role.findOne({ name: "admin" });

  // hash password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash("12345678", salt);

  const newUser = await user.create({
    name: "ch",
    email: "ch@gmail.com",
    password: hashedPassword,
    role: newRole,
  });

  // creation du nouveau token dans la table token
  const newToken = await token.create({
    key: generateToken(newUser.id, newUser.role),
  });

  // affectation du token creé
  newUser.token = newToken;
  newUser.save();

  console.log(newUser);

  res.status(200).json({
    role: newRole,
    token: newToken,
    user: newUser,
    message: "user created ",
  });
});

// @[  POST,  /api/auth/login, public,  sign in user ]
const login = asyncHandler(async (req, res) => {
  const {email, password} = req.body;

  const userExist = await User.findOne({ email });
  console.log('hello iam herer');
  if(userExist &&  await bcrypt.compare(password, userExist.password)){
     res.status(200).json({userExist, email, password, message: "users connected succee"});
   }else{
    res.status(400).json({ message: "identifiant invalid"});
   }
    
});

// @[  get,  /api/auth/logout, private,  sign out user ]
const logout = asyncHandler(async (req, res) => {
  const loggedUser = await user.findOne({ email: "ch@gmail.com" });
  
   delete token
   const loggedUserToken = await token.findById(loggedUser.token);
   const deleted = await loggedUserToken.deleteOne();

   loggedUser.token = null;
   loggedUser.save();

   res.status(200).json({
     deleted,
     loggedUserToken,
     loggedUser,
     message: "logout method from authController",
    });
});

module.exports = {
  register,
  login,
  logout,
};


//const loggedUser = await user.findOne({ email: "ch@gmail.com" });
// update token
//const newToken = await token.create({
//  key: generateToken(loggedUser.id, loggedUser.role),
//});

//loggedUser.token = newToken;
//loggedUser.save();

//res.status(200).json({
//  loggedUser,
//  message: "login method from authController",
//});