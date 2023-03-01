const express = require("express");
const router = express.Router();
var mongoose = require("mongoose");
const { religion } = require("../models/looks.model");

const Looks = mongoose.model('Looks');

module.exports.addLooks = async (req, res, next) => {
    const body = req.body;
    const looks = new Looks();
    looks.name= body.name;
    looks.status = body.status;
    await looks.save((err, doc) => {
        if (!err)
            res.json(doc);
        else {
            return next(err);
        }
    })
}
module.exports.getLooks = async (req,res)=>{
    let looks = await Looks.find();
    return res.send(looks)
}
module.exports.getLooksById = async (req,res)=>{
    let looks = await Looks.findById(req.params.id);
    return res.send(looks)
}

module.exports.updateLooks = async (req, res, next) => {
    const body = req.body;
    const looks = new Looks();
    looks.name= body.name;
    looks.status = body.status;
    await Looks.findByIdAndUpdate(req.params.id,req.body,
        (err, data) => {
            if (!err) {
                res.send(data);
            } else {
                return next(err);
            }
        }).clone();
}

module.exports.deleteLooks = async (req,res)=>{
    let looks = await Looks.findByIdAndRemove(req.params.id);
    return res.send(looks)
}