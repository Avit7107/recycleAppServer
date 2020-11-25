const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    isAdmin: { type: Boolean, required: true, default: false },
    username: { type: String, required: true },
    email: { type: String, required: true },
    PhoneNumber: { type: Number, required: true },
    password: { type: String, required: true },
  },
);

const User = mongoose.model("User", userSchema);

module.exports = User;