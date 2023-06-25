const {
  menu,
  vegItem,
  NonvegItem,
  bestSeller,
  AllItem,
  filterItem,
  IdDisplay,
  nameDisplay,
} = require("../controller/menucontroller");
const express = require("express");
const router = express.Router();
router.route("/postMenu").post(menu);
router.route("/menu").get(AllItem);
router.route("/veg").get(vegItem);
router.route("/nonveg").get(NonvegItem);
router.route("/bestSeller").get(bestSeller);
router.route("/category").get(filterItem);
router.get('/name/:name',nameDisplay);
router.route('/id/:_id').get(IdDisplay);
module.exports = router;
