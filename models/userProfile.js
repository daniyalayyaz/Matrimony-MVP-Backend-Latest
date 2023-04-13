var mongoose = require("mongoose");
var bcrypt = require("bcrypt");

var userProfileSchema = mongoose.Schema({
  step1: {type:Boolean,default:false},
  step2: {type:Boolean,default:false},
  step3:{type:Boolean,default:false},
  step4:{type:Boolean,default:false},
  step5:{type:Boolean,default:false},
  step6:{type:Boolean,default:false},
  step7:{type:Boolean,default:false},
  step8:{type:Boolean,default:false},
  email: {type: String},
  image:{type:String,},
  approve:{type:Boolean,default:null},
  requestToDelete: {type:Boolean,default:true},
  connect:Number,
  package:{type: String , default: ""},
  packageExpiry:{type: String , default: ""},
  packageDate:{type: String , default: ""},
  personalContact: {type: String , default: ""},
  parentContact: {type: String , default: ""},
  socialLinkFb: {type: String , default: ""},
  socialLinkInsta: {type: String , default: ""},
  socialLinkTwitter: {type: String , default: ""},
  name: String,
  profileCreated: {type: String , default: ""},
  gender: {type: String,default: "" },
  favourites: [],
  Block: [],
  age: {type: String , default: ""},
  status: {type: String , default: ""},
  religious: {type: String , default: ""},
  otherreligion: {type: String, default: "N/A",},
  sect: {type: String, default: "N/A",},
  caste: {type: String , default: ""},
  resetToken: String,
  active: {type:Boolean,default:true},
  deleteRequest:{type:Boolean,default:true},
  phoneactive: Boolean,
  password: String,
  religiousStatus: {type: String , default: ""},
  clan: {type: String , default: ""},
  montherTonque: {type: String , default: ""},
  looks: {type: String , default: ""},
  complexion: {type: String , default: ""},
  height: {type: String , default: ""},
  build: {type: String , default: ""},
  hobbies: {type: String , default: ""},
  country: {type: String , default: ""},
  province: {type: String, default: "N/A",},
  city: {type: String, default: "N/A",
    // required: tr ue,
  },
  house: {type: String , default: ""},
  nationality: {type: String , default: ""},
  futurePlans: {type: String , default: ""},
  professional: {type: String , default: ""},
  jobStatus: {
    type: String,
    default: "",
  },
  workplace: {type: String , default: ""},
  specialties: {
    type: String,
    default: "",
  },
  qualification: {
    type: String,
    default: "",
  },
  anotherqualification: {type: String , default: ""},
  institution: {type: String , default: ""},
  income: {type: String , default: ""},
  hideName:{
    type: Boolean,
    default: false
  },
  lockDetails:{
    type: Boolean,
    default: false
  },
  professionalInfo: {type: String , default: ""},
  inches: {type: String , default: ""},
  fatherOccuption: {type: String , default: ""},
  motherOccuption: {type: String , default: ""},
  siblingsCountSisters: Number,
  siblingsCountBrothers: Number,
  socialEconomic: {type: String , default: ""},
  familyInfo: {type: String , default: ""},
  BlockStatus: {type: Boolean, default: false},
  LoginStatus: Boolean,
  requests: [{id: String, request: String}]
});
userProfileSchema.methods.generateHashedPassword = async function () {
  let salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
};
userProfileSchema.methods.isValidPassword = async function (password) {
  const user = this;

  const compare = await bcrypt.compare(password, user.password);

  return compare;
};
var userProfile = mongoose.model("userProfile", userProfileSchema);
module.exports.userProfiles = userProfile;
//for sign up
// module.exports.validateUserLogin = validateUserLogin; // for login
