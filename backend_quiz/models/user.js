const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  firstname: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 10,
  },
  created_at: {
    type: Date,
    default: Date.now(),
  },
  role: {
    type: String,
    required: true,
    default: "user",
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
});
const User = mongoose.model("user", userSchema);
module.exports = User;
