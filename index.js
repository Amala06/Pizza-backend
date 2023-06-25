const app = require("./app");
const port = process.env.PORT || 8080;
const dotenv = require("dotenv");
const userModel=require('./model/user_model');
const OrderModel = require("./model/order_model");
const MenuModel = require("./model/menu_model");
const userRoutes = require("./routes/userRoutes");
const MenuRoutes = require("./routes/menuRoutes");

const db = require("./config/db");
db();
dotenv.config();
// connectDB();
app.get("/", (req, res) => {
  res.send("Hello shhubharambh");
});
var bodyParser = require("body-parser");
app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));
// app.use(express.bodyParser({ limit: "50mb" }));
app.use("/api/user", userRoutes);
app.use("/api/food", MenuRoutes);

app.listen(port, () => {
  console.log(`server is running at ${port}`);
});
