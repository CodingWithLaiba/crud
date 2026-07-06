const mongoose = require("mongoose");

// schema
const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    
    email: {
      type: String,
      required: true,
      unique: true,
    },
    age: {
      type: String,
    },
  },
);
const UserModel = mongoose.model("users", UserSchema);
module.exports = UserModel;
