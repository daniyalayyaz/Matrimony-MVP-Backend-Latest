const express = require("express");
const router = express.Router();
var mongoose = require("mongoose");
const { religion } = require("../models/country.model");

const Country = mongoose.model('Country');

module.exports.addCountry = async (req, res, next) => {
    const body = req.body;
    const country = new Country();
    country.name= body.name;
    country.status = body.status;
    await country.save((err, doc) => {
        if (!err)
            res.json(doc);
        else {
            return next(err);
        }
    })
}
module.exports.getCountry = async (req,res)=>{
    let country = await Country.find();
    return res.send(country)
}
module.exports.getCountryById = async (req,res)=>{
    let country = await Country.findById(req.params.id);
    return res.send(country)
}

module.exports.updateCountry = async (req, res, next) => {
    const body = req.body;
    const country = new Country();
    country.name= body.name;
    country.status = body.status;
    await Country.findByIdAndUpdate(req.params.id,req.body,
        (err, data) => {
            if (!err) {
                res.send(data);
            } else {
                return next(err);
            }
        }).clone();
}

module.exports.deleteCountry = async (req,res)=>{
    let country = await Country.findByIdAndRemove(req.params.id);
    return res.send(country)
}