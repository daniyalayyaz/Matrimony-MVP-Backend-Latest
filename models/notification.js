const mongoose = require("mongoose");
require("./userProfile");
require("./userRequest");

const NotificationSchema = new mongoose.Schema({
    name: {type: String},
    userID:{type:String},
    senderId:{type:String},
    description:{type:String},
    view:{type:Boolean},

})
var Notification = mongoose.model('Notification', NotificationSchema);
module.exports.Notification = Notification;