var mongoose = require("mongoose");
var bcrypt = require("bcrypt");

var userProfileSchema = mongoose.Schema({
  email: {type: String},
  image:{type:String,},
  approve:{type:Boolean,default:null},
  requestToDelete: {type:Boolean,default:true},
  connect:Number,
  package:String,
  packageExpiry:String,
  packageDate:String,
  personalContact: String,
  parentContact: String,
  socialLinkFb: String,
  socialLinkInsta: String,
  socialLinkTwitter: String,
  name: String,
  profileCreated: {type: String},
  gender: {type: String, },
  favourites: [],
  Block: [],
  age: String,
  status: String,
  religious: {type: String},
  otherreligion: {type: String, default: "N/A",},
  sect: {type: String, default: "N/A",},
  caste: String,
  resetToken: String,
  active: {type:Boolean,default:true},
  deleteRequest:{type:Boolean,default:true},
  phoneactive: Boolean,
  password: String,
  religiousStatus: String,
  clan: String,
  montherTonque: String,
  looks: String,
  complexion: String,
  height: String,
  build: String,
  hobbies: String,
  country: String,
  province: {type: String, default: "N/A",},
  city: {type: String, default: "N/A",
    // required: tr ue,
  },
  house: String,
  nationality: String,
  futurePlans: String,
  professional: String,
  jobStatus: {
    type: String,
    default: "N/A",
  },
  workplace: String,
  specialties: {
    type: String,
    default: "N/A",
  },
  qualification: {
    type: String,
    default: "N/A",
  },
  anotherqualification: String,
  institution: String,
  income: String,
  hideName:{
    type: Boolean,
    default: false
  },
  lockDetails:{
    type: Boolean,
    default: false
  },
  professionalInfo: String,
  inches: String,
  fatherOccuption: String,
  motherOccuption: String,
  siblingsCountSisters: Number,
  siblingsCountBrothers: Number,
  socialEconomic: String,
  familyInfo: String,
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
