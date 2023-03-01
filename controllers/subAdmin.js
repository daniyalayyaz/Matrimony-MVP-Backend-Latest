const express = require("express");
const router = express.Router();
const { subAdmin } = require("../models/subAdmin");
const Module = require("module");
const {userProfiles} = require("../models/userProfile");
const {Package} = require("../models/package.model");
const {send} = require("wbm");

const subAdminCreate = async (req,res)=>{
    console.log(req.body);
            const admin = new subAdmin();
    try{
        admin.name = req.body.name;
        admin.userName = req.body.userName;
        admin.password = req.body.password;
        admin.edit = req.body.edit;
        admin.status = req.body.status;
        admin.role = "admin";
        admin.view = true;
        admin.save().then((doc,err)=>{
            if(!err){
                res.json(doc);
            }else{
                return (err);
            }
        })
    }catch (error){
        return error
    }
};
const subAdminLogin = async (req, res, next) => {
    try {
        // Extract email and password from request body
        const userName = req.body.userName;
        const password = req.body.password;

        // Check if email and password are provided
        if (!userName || !password) {
            return res.status(400).send({error: "User Name and password are required"});
        }

        // Find user with matching email and password
        const user = await userProfiles.findOne({userName: userName});
        console.log(user);
        if (!user) {
            return res.status(401).send({error: "Invalid User xName or password"});
        }
        console.log(user.active);
        if(user.active == false){
            return res.status(401).send({error:"You Account Disable Please Contact Admin."});
        }
        await userProfiles.findOneAndUpdate(

            {_id: user._id},

            {$set: {LoginStatus: true}}
        );

        // Return login success response with token and user ID
        return res.status(200).send({
            message: "Login Successful",
            // token: token,
            id: user._id,
            user: user,
        });
    } catch (error) {
        // Return error response if something goes wrong
        return res;
    }
};
const subAdminShow = async (req, res) => {
    let Admin = await subAdmin.find();
    return res.send(Admin)
};
const subAdminUpdate = async (req,res)=>{
    const body = req.body;
    subAdmin.findByIdAndUpdate(req.params.id,body,
        (err, data) => {
            if (!err) {
                res.send(data);
            } else {
                return (err);
            }
        })
};
const subAdminDelete  = async (req, res) => {
    const id = req.params.id
    try {
        const admin = await subAdmin.findByIdAndDelete({
            _id: id
        })
        res.status(200).json({
            message: "admin has been deleted"
        })
    } catch (error) {
        res.status(500).json({
            error: err
        })
    }
};
const subAdminGetByID= async (req, res, next) => {
    try {
        const id = req.params.id;
        let admin = await subAdmin.findById(id);
        if (!admin) {
            console.log("admin not find")
        }

        let datatosent = {
            message: "admin list",
            admin,
        };
        return res.send(admin);
    } catch (e) {
        console.log(e)
    }
};
const subAdminGetByName= async (req, res, next) => {
    try {
        console.log(req.params);
        console.log(req.body.password);
        const userName = req.params.id;
        let admin = await subAdmin.findOne({userName:userName});
    console.log(admin);
        if (!admin) {
            console.log("admin not find")
        }
        if(admin.password != req.body.password){
            admin = false;
        }
        if(admin.status == false){
            admin = null;
        }
        return res. send(admin);
    } catch (e) {
        console.log(e)
    }
};
module.exports = {
    subAdminCreate,
    subAdminLogin,
    subAdminShow,
    subAdminUpdate,
    subAdminDelete,
    subAdminGetByID,
    subAdminGetByName,
}
