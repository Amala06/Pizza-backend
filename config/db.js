const mongoose = require("mongoose");
require("dotenv").config();
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(
      `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PW}@cluster0.7cecbl3.mongodb.net/Pizza`
    );
    console.log("connected to mongoDB Atlas");
  } catch (e) {
    console.log(`Erorr:${e.message}`);
    process.exit();
  }
};

module.exports = connectDB;
