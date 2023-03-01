const express = require("express");
const router = express.Router();
var mongoose = require("mongoose");
const { religion } = require("../models/complexion.model");

const Complexion = mongoose.model('Complexion');

module.exports.addComplexion = async (req, res, next) => {
    const body = req.body;
    const complexion = new Complexion();
    complexion.name= body.name;
    complexion.status = body.status;
    await complexion.save((err, doc) => {
        if (!err)
            res.json(doc);
        else {
            return next(err);
        }
    })
}
module.exports.getComplexion = async (req,res)=>{
    let complexion = await Complexion.find();
    return res.send(complexion)
}
module.exports.getComplexionById = async (req,res)=>{
    let complexion = await Complexion.findById(req.params.id);
    return res.send(complexion)
}

module.exports.updateComplexion = async (req, res, next) => {
    const body = req.body;
    const complexion = new Complexion();
    complexion.name= body.name;
    complexion.status = body.status;
    await Complexion.findByIdAndUpdate(req.params.id,req.body,
        (err, data) => {
            if (!err) {
                res.send(data);
            } else {
                return next(err);
            }
        }).clone();
}

module.exports.deleteComplexion = async (req,res)=>{
    let complexion = await Complexion.findByIdAndRemove(req.params.id);
    return res.send(complexion)
}