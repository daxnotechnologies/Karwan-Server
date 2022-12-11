const mongoose = require("mongoose");
const Id = mongoose.Schema.Types.ObjectId;

const VisaTypeSchema = new mongoose.Schema({
  Type:{type:String
  },
});

const Visa = new mongoose.model("VisaT", VisaTypeSchema);

module.exports = Visa;
