const express = require("express");
const router = express.Router();
var mongoose = require("mongoose");
const { religion } = require("../models/sect.model");

const Sect = mongoose.model('Sect');

module.exports.addSect = async (req, res, next) => {
    const body = req.body;
    const sect = new Sect();
    sect.name= body.name;
    sect.status = body.status;
    await sect.save((err, doc) => {
        if (!err)
            res.json(doc);
        else {
            return next(err);
        }
    })
}
module.exports.getSect = async (req,res)=>{
    let sect = await Sect.find();
    return res.send(sect)
}
module.exports.getSectById = async (req,res)=>{
    let sect = await Sect.findById(req.params.id);
    return res.send(sect)
}

module.exports.updateSect = async (req, res, next) => {
    const body = req.body;
    const sect = new Sect();
    sect.name= body.name;
    sect.status = body.status;
    await Sect.findByIdAndUpdate(req.params.id,req.body,
        (err, data) => {
            if (!err) {
                res.send(data);
            } else {
                return next(err);
            }
        }).clone();
}

module.exports.deleteSect = async (req,res)=>{
    let sect = await Sect.findByIdAndRemove(req.params.id);
    return res.send(sect)
}