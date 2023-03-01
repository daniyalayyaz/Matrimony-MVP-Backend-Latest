const express = require("express");
const router = express.Router();
var mongoose = require("mongoose");
const { preference } = require("../models/preference");
const {subAdmin} = require("../models/subAdmin");
const {Package} = require("../models/package.model");
// const Notification = mongoose.model('Notification');
module.exports.preferenceCreate = async (req,res)=>{
    const  body = req.body.data;
    console.log(body);

    let noti = new preference();
    // noti = {...body};
    noti.gender = req.body.user.gender;
    noti.userId = req.body.user._id;
    for(const key in body){
        noti[key] = body[key]
    }
    await noti.save((err, doc) => {
        if (!err)
            res.json(doc);
        else {
            return next(err);
        }
    })
}
// module.exports.notificationShow = async (req, res) => {
//     const senderId = req.params.id;
//     let noti = await Notification.find({userID: senderId});
//     return res.send(noti);
// };
module.exports.preferenceShowById = async (req, res) => {
    const userId = req.params.id;
    let pref = await preference.find({userId: userId});
    return res.send(pref);
};
//
// module.exports.notificationDeleteAll = async (req, res) => {
//     const senderId = req.params.id;
//     let noti = await Notification.deleteMany();
//     return res.send(noti);
// };
// module.exports.notificationUpdate = async (req, res) => {
//     const senderId = req.params.id;
//     Notification.update({_id: senderId}, { $set: { view: false } }, (err, doc) => {
//         if (err){
//             return res.json(err);
//         }else{
//             return res.send(doc);
//         }
//     });
// };
// module.exports.notificationUpdate = async (req,res)=>{
// ///     const senderId = req.params.id;
// //         view = false;
//     Notification.findByIdAndUpdate(req.params.id, {view: false},
//         (err, data) => {
//             if (!err) {
//                 res.send(data);
//             } else {
//                 return next(err);
//             }
//         })
// };