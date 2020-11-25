const mongoose = require("mongoose");

const productSchema = mongoose.Schema(
  {
    name: { type: String },
    price: { type: Number },
    image: { type: String },
    quantity:{ type: Number },
    countInStock:{ type: Number },
    category: { type: String },
    description: { tupe: String },
  },
);

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
