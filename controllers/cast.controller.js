const express = require("express");
const router = express.Router();
var mongoose = require("mongoose");
const { religion } = require("../models/cast.model");

const Cast = mongoose.model('Cast');

module.exports.addCast = async (req, res, next) => {
    const body = req.body;
    const cast = new Cast();
    cast.name= body.name;
    cast.status = body.status;
    await cast.save((err, doc) => {
        if (!err)
            res.json(doc);
        else {
            return next(err);
        }
    })
}
module.exports.getCast = async (req,res)=>{
    let cast = await Cast.find();
    return res.send(cast)
}
module.exports.getCastById = async (req,res)=>{
    let cast = await Cast.findById(req.params.id);
    return res.send(cast)
}

module.exports.updateCast = async (req, res, next) => {
    const body = req.body;
    const cast = new Cast();
    cast.name= body.name;
    cast.status = body.status;
    await Cast.findByIdAndUpdate(req.params.id,req.body,
        (err, data) => {
            if (!err) {
                res.send(data);
            } else {
                return next(err);
            }
        }).clone();
}

module.exports.deleteCast = async (req,res)=>{
    let cast = await Cast.findByIdAndRemove(req.params.id);
    return res.send(cast)
}