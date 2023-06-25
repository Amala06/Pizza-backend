const mongoose = require("mongoose");
const db = require("../config/db");

const OrderSchema = new mongoose.Schema({
  email: {
    type: String,
  },
  OrderArray: [
    {
      orderId: {
        type: String,
      },
      OrderDate: {
        type: Date,
      },
      orderItems: [
        {
          ordername: String,
          orderPrice: Number,
          quantity: Number,
        },
      ],
    },
  ],
});

module.exports = mongoose.model('Order', OrderSchema);
module.exports=OrderSchema;
