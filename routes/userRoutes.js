const {registerUser, login}=require('../controller/usercontroller');
const express = require("express");
const router = express.Router();
router.route('/register').post(registerUser);
router.route('/login').post(login);
module.exports = router;
