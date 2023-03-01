const express = require("express");
const router = express.Router();
const { userProfiles } = require("../models/userProfile");
const { userRequest } = require("../models/userRequest");
const { Promotion } = require("../models/package.model");
const { report } = require("../models/report");
const {Package} = require("../models/package.model");

// Router for getting all  users
const AllUser = async (req, res) => {
    try {
        const user = await userProfiles.find();
        res.status(200).send(user);
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: err })
    }
}

const DeleteUser = async (req, res) => {
    const id = req.params.id
    try {
        const user = await userProfiles.findByIdAndDelete({
            _id: id
        })
        res.status(200).json({
            message: "User has been deleted"
        })
    } catch (error) {
        res.status(500).json({
            error: err
        })
    }
}

const BlockUser = async (req, res) => {
    const id = req.params.id
    try {
        const user = await userProfiles.findById({
            _id: id
        })
        user.BlockStatus = true
        await user.save();
        res.status(200).json({
            message: "User has been blocked successfully"
        })
    } catch (error) {
        res.status(500).json({
            message: "Something went wrong",
            error: error
        })
    }
}

const ViewOnlineUsers = async (req, res) => {
    try {
        const OnlineUsers = await userProfiles.find({ LoginStatus: true })
        res.status(200).json({
            data: OnlineUsers
        })
    } catch (error) {
        res.status(500).json({
            message: "Something went wrong",
            error: error
        })
    }
}

const viewAllRequest = async (req, res) => {
    try {
        let user = await userRequest.find();
        let ridUser;
        let sidUser;
        let rid = [];
        let sid = [];
        for (let i = 0; i < user.length; i++) {
            rid[i] = user[i].rid;
            sid[i] = user[i].sid;
            ridUser = await userProfiles.find({ _id: rid[i] })
            sidUser = await userProfiles.find({ _id: sid[i] })

        }
        return res.status(200).json({ rid: ridUser, sid: sidUser });
    } catch (error) {
        return res.status(400).json({ error });
    }
};

const generateReport = async (req, res) => {
    const complainerId = req.body.complainerId;
    const complainedId = req.body.complainedId;
    const complainerName = req.body.complainerName;
    const reportText = req.body.reportText;
    try {
        const newReport = new report({
            complainerId: complainerId,
            complainedId: complainedId,
            complainerName: complainerName,
            report: reportText
        });
        await newReport.save();
        await res.status(201).json({ message: 'Report generated successfully' });
    } catch (error) {
        await res.status(500).json({
            message: "something went wrong",
            error: error
        })
    }
};
const getAllReports = async (req, res) => {
    try {
        const reports = await report.find();
        res.status(200).send(reports);
    } catch (err) {
        console.log(err);
        await res.status(500).json({error: err})
    }
}
const deleteAllReports = async (req, res) => {
    try{
        report.deleteMany({}, async(error)=>{
            if(error){
                await res.status(500).json({error: error});
            }else{
                await res.status(200).json({message: "All Reports deleted"});
            }
        })
    }catch (e) {
        console.log(e)
    }
}
const promotionAdd =  async (req, res) => {
    const promotion = new Promotion();
    const body = req.body;
    promotion.name = body.name;
    promotion.description = body.description;
    promotion.promotionShow = body.promotionShow;
    await promotion.save((err, doc) =>{
        if(!err)
            res.json(doc);
        else{
            return next(err);
        }
    })
};
const promotionget = async (req,res)=>{
    let promotion = await Promotion.find();
    return res.send(promotion)};

const deletePromotion = async (req, res) => {
    const id = req.params.id
    try {
        const promotion = await Promotion.findByIdAndDelete({
            _id: id
        })
        res.status(200).json({
            message: "Promotion has been deleted"
        })
    } catch (error) {
        res.status(500).json({
            error: err
        })
    }
}
const updatePromotion = async (req,res)=>{
    const body = req.body;
    Promotion.findByIdAndUpdate(req.params.id,body,
        (err, data) => {
            if (!err) {
                res.send(data);
            } else {
                return next(err);
            }
        })
};
const getPromotionById = async (req, res, next) => {
    try {
        const id = req.params.id;
        let promotion = await Promotion.findById(id);
        if (!promotion) {
            console.log("Promotion not find")
        }
        let datatosent = {
            message: "Promotion list",
            promotion,
        };
        return res.send(promotion);
        console.log(promotion);
    } catch (e) {
        console.log(e)
    }
};
module.exports = {
    AllUser,
    DeleteUser,
    BlockUser,
    ViewOnlineUsers,
    viewAllRequest,
    generateReport,getAllReports,deleteAllReports,
    promotionAdd,promotionget,deletePromotion,updatePromotion,getPromotionById,
};