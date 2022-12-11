const express = require("express");

const {
  Login,
  forgotpassword,
  resetPassword,
  AdminLogin,
  Adminforgotpassword,
  AdminresetPassword
} = require("../controllers/Auth");

const router = express.Router();

router.post("/login", Login);
router.post("/Adminlogin", AdminLogin);

router.post("/reset/:id", forgotpassword);
router.post("/forgotpassword",resetPassword);
router.post("/areset/:id", AdminresetPassword );
router.post("/aforgotpassword",Adminforgotpassword);

module.exports = router;
