const express = require("express");
const router = express.Router();
var mongoose = require("mongoose");
const { religion } = require("../models/house.model");

const House = mongoose.model('House');

module.exports.addHouse = async (req, res, next) => {
    const body = req.body;
    const house = new House();
    house.name= body.name;
    house.status = body.status;
    await house.save((err, doc) => {
        if (!err)
            res.json(doc);
        else {
            return next(err);
        }
    })
}
module.exports.getHouse = async (req,res)=>{
    let house = await House.find();
    return res.send(house)
}
module.exports.getHouseById = async (req,res)=>{
    let house = await House.findById(req.params.id);
    return res.send(house)
}

module.exports.updateHouse = async (req, res, next) => {
    const body = req.body;
    const house = new House();
    house.name= body.name;
    house.status = body.status;
    await House.findByIdAndUpdate(req.params.id,req.body,
        (err, data) => {
            if (!err) {
                res.send(data);
            } else {
                return next(err);
            }
        }).clone();
}

module.exports.deleteHouse = async (req,res)=>{
    let house = await House.findByIdAndRemove(req.params.id);
    return res.send(house)
}