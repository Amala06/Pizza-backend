const asyncHandler = require("express-async-handler");
const Menu = require("../model/menu_model");

const menu=asyncHandler(async(req,res)=>{
    const {
      name,
      qty,
      pic,
      desc,
      reviews,
      top,
      size,
      veg,
      med,
      small,
      large,
      bestSell,
      category,
    } = req.body;
     if (!name  || !qty || !desc || !reviews) {
       res.status(400);
       throw new Error("Please enter all the fields");
     }
     const itemExist=await Menu.findOne({name});
     if(itemExist){
        res.status(400);
        throw new Error("Item already exists");
     }
     const item = await Menu.create({
       name,
     category,
       qty,
       pic,
       desc,
       reviews,
       top,
       med,
       small,
       large,
       veg,
       bestSell
     });
     if (item) {
       res.status(201).json({
         _id: item._id,
         name: item.name,
         price: item.price,
         qty: item.qty,
         pic: item.pic,
         desc: item.desc,
         reviews: item.reviews,
         top: item.top,
         med: item.med,
         small: item.small,
         large: item.large,
         veg: item.veg,
         bestSell: item.bestSell,
         category: item.category,
         //  token: generateToken(user._id),
       });
     } else {
       res.status(400);
       throw new Error("Fail to create the Food Item");
     }

 
})

const AllItem = asyncHandler(async (req, res) => {
  try {
    const MyData = await Menu.find();
    // console.log(MyData); // add this line to log MyData to the console

    res.status(200).json(MyData);
  } catch (error) {
    console.error(error); // add this line to log any errors to the console
    res.status(500).json({ message: "Could not fetch the data" });
  }
});

const vegItem = asyncHandler(async (req, res) => {
  try {
    const MyData = await Menu.find({veg:true});
    // console.log(MyData); // add this line to log MyData to the console

    res.status(200).json(MyData);
  } catch (error) {
    console.error(error); // add this line to log any errors to the console
    res.status(500).json({ message: "Could not fetch the data" });
  }
});
const NonvegItem = asyncHandler(async (req, res) => {
  try {
    const MyData = await Menu.find({veg:false});
    // console.log(MyData); // add this line to log MyData to the console

    res.status(200).json(MyData);
  } catch (error) {
    console.error(error); // add this line to log any errors to the console
    res.status(500).json({ message: "Could not fetch the data" });
  }
});
const bestSeller=asyncHandler(async (req, res) => {
  try {
    const MyData = await Menu.find({ bestSell: true });
    // console.log(MyData); // add this line to log MyData to the console

    res.status(200).json(MyData);
  } catch (error) {
    console.error(error); // add this line to log any errors to the console
    res.status(500).json({ message: "Could not fetch the data" });
  }
});
const filterItem = asyncHandler(async (req, res) => {
  const item = req.params.name;
  try {
    const regex = new RegExp(item);
    const MyData = await Menu.find({ name: regex });

    res.status(200).json(MyData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Could not fetch the data" });
  }
});


const IdDisplay= asyncHandler(async (req, res) => {
  // const item = req.params._id;
  // console.log(item);
  try {
      const item = req.params._id;
      console.log(item);
    const MyData = await Menu.findOne({ _id:item });
    // console.log(MyData); // add this line to log MyData to the console

    res.status(200).json(MyData);
  } catch (error) {
    console.error(error); // add this line to log any errors to the console
    res.status(500).json({ message: "Could not fetch the data" });
  }
}
);
const nameDisplay = asyncHandler(async (req, res) => {

  try {
      const name = req.params.name;
      // console.log(item);
    const MyData = await Menu.find({ name:name });
    // console.log(MyData); // add this line to log MyData to the console

    res.status(200).json(MyData);
  } catch (error) {
    console.error(error); // add this line to log any errors to the console
    res.status(500).json({ message: "Could not fetch the data" });
  }
});



module.exports = {
  menu,
  vegItem,
  NonvegItem,
  bestSeller,
  AllItem,
  filterItem,
  IdDisplay,
  nameDisplay,
};