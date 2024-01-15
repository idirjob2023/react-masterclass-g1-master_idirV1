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
  const { name, email, password } = req.body;
  // Cripter le mot de passe 
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);
  
  const user = await User.create({
    name,
    email,
    password: hashedPassword,
  });

  
  res.json({
    user: {
      id: user._id,
      name: user.name,
      email: user.email,
      token: generateToken(user._id),
    },
  });
 

});

// @[  POST,  /api/auth/login, public,  sign in user ]
const login = asyncHandler(async (req, res) => {
  const {email, password} = req.body;
  const user = await User.findOne({ email });

  console.log('hello iam herer');
  if(user &&  await bcrypt.compare(password, user.password)){
     res.status(200).json({ user:{
                                    id:user._id,
                                    name:user.name,
                                    email:user.email,
                           token:generateToken(user._id),
                          },  message: "users connected succee"});
   }else{
    res.status(400).json({ email,message: "identifiant invalid"});
   }
    
});

// @[  get,  /api/auth/logout, private,  sign out user ]

const logout = asyncHandler(async (req, res) => {
  const { email } = req.body;
  res.json({ email, msg: "logout with success" });
  console.log({email}) ; 
  // const loggedUser = await user.findOne({ email: "ch@gmail.com" });
  
  //  delete token
  //  const loggedUserToken = await token.findById(loggedUser.token);
  //  const deleted = await loggedUserToken.deleteOne();

  //  loggedUser.token = null;
  //  loggedUser.save();

  //  res.status(200).json({
  //    deleted,
  //    loggedUserToken,
  //    loggedUser,
  //    message: "logout method from authController",
  //   });
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