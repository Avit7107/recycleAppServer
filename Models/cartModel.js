const mongoose = require("mongoose");
const productSchema = require("./productModel");

const cartSchema = mongoose.Schema(
  {
    userID: { type: String },
    cartItems: [
      {
        countInStock: { type: Number },
        product: {
          name: { type: String },
          price: { type: Number },
          image: { type: String },
          category: { type: String },
        },
      },
    ],
  },
);

const Cart = mongoose.model("Cart", cartSchema);

module.exports = Cart;