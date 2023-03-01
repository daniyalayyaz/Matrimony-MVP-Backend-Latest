const express = require("express");
const router = express.Router();
var mongoose = require("mongoose");
const { religion } = require("../models/religion");

const Religion = mongoose.model('Religion');

module.exports.addReligion = async (req, res, next) => {
    const body = req.body;
    const religion = new Religion();
    religion.name= body.name;
    religion.status = body.status;
       await religion.save((err, doc) => {
        if (!err)
            res.json(doc);
        else {
            return next(err);
        }
    })
}
module.exports.getReligion = async (req,res)=>{
    let religion = await Religion.find();
    return res.send(religion)
}
module.exports.getReligionById = async (req,res)=>{
    let religion = await Religion.findById(req.params.id);
    return res.send(religion)
}

module.exports.updateReligion = async (req, res, next) => {
    const body = req.body;
    const religion = new Religion();
    religion.name= body.name;
    religion.status = body.status;
    await Religion.findByIdAndUpdate(req.params.id,req.body,
        (err, data) => {
            if (!err) {
                res.send(data);
            } else {
                return next(err);
            }
        }).clone();
}

module.exports.deleteReligion = async (req,res)=>{
    let religion = await Religion.findByIdAndRemove(req.params.id);
    return res.send(religion)
}