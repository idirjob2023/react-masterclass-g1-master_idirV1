const express = require("express");
const router = express.Router();
const { register, login, logout, login1 } = require("../controllers/authController");

router.post("/register", register);
router.post("/login", login);
router.post("/logout", logout);
router.post("/login1", login1); // faire des testes selon les besion
module.exports=router ;