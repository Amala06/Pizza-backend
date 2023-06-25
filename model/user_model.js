const mongoose=require('mongoose');
const bcrypt=require('bcrypt');
// const dotenv=require('dotenv');
const db = require('../config/db');
// db();
// dotenv.config();
const userSchema = new mongoose.Schema({
    name:String,
  email: {
    type: String,
    unique: true,
  },
  password: {
    type: String,
  },
  phone:{
    type:String
  },
  address:{
    type:String,
  }
});

userSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};
userSchema.pre("save", async function (next) {
  if (!this.isModified) {
    next();
  }
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

const userModel=mongoose.model('User',userSchema);
module.exports=userModel;