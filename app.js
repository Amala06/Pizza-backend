const express=require('express');
const app=express();
app.use(express.json());
const cors = require("cors");
app.use(cors());
app.use(
  cors({
    origin: '*' ,// Set the allowed origin(s)
    methods: ["GET", "POST"], // Set the allowed HTTP methods
    allowedHeaders: ["Content-Type", "Authorization"], // Set the allowed headers
  })
);



module.exports=app;
