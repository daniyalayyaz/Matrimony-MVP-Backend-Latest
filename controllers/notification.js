const express = require("express");
const router = express.Router();
var mongoose = require("mongoose");
const { Notification } = require("../models/notification");
const {subAdmin} = require("../models/subAdmin");
const {Package} = require("../models/package.model");
// const Notification = mongoose.model('Notification');
module.exports.notificationCreate = async (req,res)=>{
    const  body = req.body.data;
    const view = req.body.view;
    const description = req.body.description;
    const noti = new Notification();
    noti.name = body.name;
    noti.userID = req.params.id;
    noti.description = description;
    noti.view = view;
    noti.senderId = body._id;
    await noti.save((err, doc) => {
        if (!err)
            res.json(doc);
        else {
            return next(err);
        }
    })
}
module.exports.notificationShow = async (req, res) => {
    const senderId = req.params.id;
    let noti = await Notification.find({userID: senderId});
    return res.send(noti);
};
module.exports.notificationShowById = async (req, res) => {
    const senderId = req.params.id;
    let noti = await Notification.find({userID: senderId,view: true});
    return res.send(noti);
};

module.exports.notificationDeleteAll = async (req, res) => {
    const senderId = req.params.id;
    let noti = await Notification.deleteMany();
    return res.send(noti);
};
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
module.exports.notificationUpdate = async (req,res)=>{
///     const senderId = req.params.id;
//         view = false;
    Notification.findByIdAndUpdate(req.params.id, {view: false},
        (err, data) => {
            if (!err) {
                res.send(data);
            } else {
                return next(err);
            }
        })
};