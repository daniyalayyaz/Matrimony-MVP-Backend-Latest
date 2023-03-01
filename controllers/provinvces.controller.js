const express = require("express");
const router = express.Router();
var mongoose = require("mongoose");
const { religion } = require("../models/provinvces.model");

const Provinvces = mongoose.model('Provinvces');

module.exports.addProvinvces = async (req, res, next) => {
    const body = req.body;
    const provinvces = new Provinvces();
    provinvces.name= body.name;
    provinvces.status = body.status;
    await provinvces.save((err, doc) => {
        if (!err)
            res.json(doc);
        else {
            return next(err);
        }
    })
}
module.exports.getProvinvces = async (req,res)=>{
    let provinvces = await Provinvces.find();
    return res.send(provinvces)
}
module.exports.getProvinvcesById = async (req,res)=>{
    let provinvces = await Provinvces.findById(req.params.id);
    return res.send(provinvces)
}

module.exports.updateProvinvces = async (req, res, next) => {
    const body = req.body;
    const provinvces = new Provinvces();
    provinvces.name= body.name;
    provinvces.status = body.status;
    await Provinvces.findByIdAndUpdate(req.params.id,req.body,
        (err, data) => {
            if (!err) {
                res.send(data);
            } else {
                return next(err);
            }
        }).clone();
}

module.exports.deleteProvinvces = async (req,res)=>{
    let provinvces = await Provinvces.findByIdAndRemove(req.params.id);
    return res.send(provinvces)
}