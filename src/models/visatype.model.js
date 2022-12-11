const mongoose = require("mongoose");
const Id = mongoose.Schema.Types.ObjectId;

const VisaTypeSchema = new mongoose.Schema({
  Type:{type:String
  },
  pricingplan:{
    type:{type:String},
    price:{type:Number},
    currency:{type:String}
  },
  application:{type:String}
});

const Visa = new mongoose.model("VisaType", VisaTypeSchema);

module.exports = Visa;
