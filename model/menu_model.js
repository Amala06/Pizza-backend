const mongoose=require('mongoose');
const db=require('../config/db');
// db();
const menuSchema=new mongoose.Schema({
    name:String,
    
    qty:{
        type:Number,
        default:1
    },
    category:String,
    pic:String,
    desc:String,
    reviews:Number,
    top:{
        type:String,
        default:"No toppings"
    },
    med:Number,
    small:Number,
   large :Number,
    veg:{
        type:Boolean,
        default:true
    },
   bestSell: {
        type:Boolean,
        default:false
    }
})
const menuModel=mongoose.model('Menu',menuSchema);
module.exports=menuModel;