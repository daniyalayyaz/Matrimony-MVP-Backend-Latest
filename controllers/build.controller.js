const express = require("express");
const router = express.Router();
var mongoose = require("mongoose");
const { religion } = require("../models/build.model");

const Build = mongoose.model('Build');

module.exports.addBuild = async (req, res, next) => {
    const body = req.body;
    const build = new Build();
    build.name= body.name;
    build.status = body.status;
    await build.save((err, doc) => {
        if (!err)
            res.json(doc);
        else {
            return next(err);
        }
    })
}
module.exports.getBuild = async (req,res)=>{
    let build = await Build.find();
    return res.send(build)
}
module.exports.getBuildById = async (req,res)=>{
    let build = await Build.findById(req.params.id);
    return res.send(build)
}

module.exports.updateBuild = async (req, res, next) => {
    const body = req.body;
    const build = new Build();
    build.name= body.name;
    build.status = body.status;
    await Build.findByIdAndUpdate(req.params.id,req.body,
        (err, data) => {
            if (!err) {
                res.send(data);
            } else {
                return next(err);
            }
        }).clone();
}

module.exports.deleteBuild = async (req,res)=>{
    let build = await Build.findByIdAndRemove(req.params.id);
    return res.send(build)
}