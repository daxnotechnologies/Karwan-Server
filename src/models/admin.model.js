const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  userName: { type: String, required: true },
  email: { type: String, required: true },
  contact: { type: String, required: true },
  address: { type: String, required: true },
  password: { type: String, required: true },
  cnic:{type:String},
  Designation:{type:String},
  Restrict:[{type:String}]
});

const User = new mongoose.model("Admin", UserSchema);

module.exports = User;
