const mongoose = require("mongoose");
const Id = mongoose.Schema.Types.ObjectId;

const VisaSchema = new mongoose.Schema({
  visaRequestDate: { type: Date /* , required: true */ },
  user_id: { type: Id, ref: "User", required: true },
  Family:[{
      information:{
        FullName:{type:String},
        Father_Husband:{type:String},
        Mother:{type:String},
        CNIC:{type:String},
        PassportNo:{type:String},
        Gender:{type:String},
        MartialStatus:{type:String},
        Contact:{type:String},
        Email:{type:String},
        DOB:{type:String},
        Occupation:{type:String},
        city:{type:String}
      },
      documents:{
        passport:{type:String},
        passport_size_pics:{type:String},
        proof_of_vaccination:{type:String},
        marriage_certificate:{type:String},
        birth_certificate:{type:String} 
      }
  }],
  Status:{type:String},
  application_type:{type:String},
  visatype:{type: Id, ref: "VisaType", required: true },
  payment:{type:Number},
  Description:{type:String}
});

const Visa = new mongoose.model("Visa", VisaSchema);

module.exports = Visa;
