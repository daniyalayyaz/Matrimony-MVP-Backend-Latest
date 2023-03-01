const express = require("express");
const router = express.Router();
var mongoose = require("mongoose");
const { religion } = require("../models/motherLanguage.model");

const MotherLanguage = mongoose.model('MotherLanguage');

module.exports.addMotherLanguage = async (req, res, next) => {
    const body = req.body;
    const motherLanguage = new MotherLanguage();
    motherLanguage.name= body.name;
    motherLanguage.status = body.status;
    await motherLanguage.save((err, doc) => {
        if (!err)
            res.json(doc);
        else {
            return next(err);
        }
    })
}
module.exports.getMotherLanguage = async (req,res)=>{
    let motherLanguage = await MotherLanguage.find();
    return res.send(motherLanguage)
}
module.exports.getMotherLanguageById = async (req,res)=>{
    let motherLanguage = await MotherLanguage.findById(req.params.id);
    return res.send(motherLanguage)
}

module.exports.updateMotherLanguage = async (req, res, next) => {
    const body = req.body;
    const motherLanguage = new MotherLanguage();
    motherLanguage.name= body.name;
    motherLanguage.status = body.status;
    await MotherLanguage.findByIdAndUpdate(req.params.id,req.body,
        (err, data) => {
            if (!err) {
                res.send(data);
            } else {
                return next(err);
            }
        }).clone();
}

module.exports.deleteMotherLanguage = async (req,res)=>{
    let motherLanguage = await MotherLanguage.findByIdAndRemove(req.params.id);
    return res.send(motherLanguage)
}