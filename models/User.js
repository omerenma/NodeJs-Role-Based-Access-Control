const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const UserSchema = new Schema({
  email: {
    type: String,
    required: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    default: "super-admin",
    enum: ["super-admin", "admin", "user"],
  },
  accessToken: {
    type: String,
  },
  date: {
    type: Date,
    defualt: Date.now,
  },
});
const User = mongoose.model("user", UserSchema);
module.exports = User;
