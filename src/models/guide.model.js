const mongoose = require("mongoose");

const SuplicationSchema = new mongoose.Schema({
  guideTitle: { type: String, required: true },
  guide: { type: String, required: true },
  /*   email: { type: String, required: true },
  contact: { type: Number, required: true },
  address: { type: String, required: true },
  profilePic: { type: String, required: false },
  password: { type: String, required: true }, */
});

const Supplication = new mongoose.model("Guide", SuplicationSchema);

module.exports = Supplication;
