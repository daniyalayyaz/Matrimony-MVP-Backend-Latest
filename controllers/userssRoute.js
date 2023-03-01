const express = require("express");
const { userProfiles } = require("../models/userProfile");
const { userRequest } = require("../models/userRequest");
const { preference } = require("../models/preference");
const router = express.Router();
// const Booking = require('../models/booking');
// const Room = require('../models/room');

// Router for getting all online users
const OnlineUser = async (req, res) => {
  const userId  = req.body.id;
  let userPrefrence;
  try {
    let pref = await preference.find({userId: userId});
    userPrefrence = pref[0]._doc;
    console.log(userPrefrence)

    const user = await userProfiles.find({
      $or: [
        { age:userPrefrence.age },
        { religious:userPrefrence.religious },
        { nationality:userPrefrence.otherNationalities },
        {professional:userPrefrence.profession},
        {religiousStatus:userPrefrence.religiousStatus},
        {caste:userPrefrence.caste},
        {clan:userPrefrence.clan},
        {income:userPrefrence.monthlyIncome},
        {montherTonque:userPrefrence.montherTonque},
        {looks:userPrefrence.looks},
        {complexion:userPrefrence.complexion},
        {build:userPrefrence.build},
        {nationality:userPrefrence.country},
        {socialEconomic:userPrefrence.socioeconomicStatus},
        {siblingsCountBrothers:userPrefrence.BrotherCount},
        {siblingsCountSisters:userPrefrence.SisterCount},
      ],
    }

  );
      return res.status(200).send(user);
  } catch (error) {
    return res.status(400).json({ error });
  }
};
const nearBy = async (req, res) => {
  const body  = req.body.data;
  let userPrefrence;
  try {
    let pref = await preference.find({userId: body._id});
    userPrefrence = pref[0]._doc;
    console.log(userPrefrence)
    const user = await userProfiles.find({ city: body.city,
      $or: [
        { age:userPrefrence.age },
        { religious:userPrefrence.religious },
        { nationality:userPrefrence.otherNationalities },
        {professional:userPrefrence.profession},
        {religiousStatus:userPrefrence.religiousStatus},
        {caste:userPrefrence.caste},
        {clan:userPrefrence.clan},
        {income:userPrefrence.monthlyIncome},
        {montherTonque:userPrefrence.montherTonque},
        {looks:userPrefrence.looks},
        {complexion:userPrefrence.complexion},
        {build:userPrefrence.build},
        {nationality:userPrefrence.country},
        {socialEconomic:userPrefrence.socioeconomicStatus},
        {siblingsCountBrothers:userPrefrence.BrotherCount},
        {siblingsCountSisters:userPrefrence.SisterCount},
      ],
    });
    return res.status(200).send(user);
  } catch (error) {
    return res.status(400).json({ error });
  }
};
const addToFav = async (req, res) => {
  const { uid, id } = req.body;
  try {
    const user = await userProfiles.findById(id);
    const check = user.favourites.some((val) => val == uid);
    if (check) {
      user.favourites = user.favourites.filter((val) => val != uid);
      await user.save();
    } else {
      user.favourites.push(uid);
      await user.save();
    }
    return res.status(200).send(user);
  } catch (error) {
    return res.status(400).json({ error });
  }
};
const sentRequest = async (req, res) => {
  const { id, rid, request } = req.body;

  try {

    if (request == "sending") {
      let user = await new userRequest();
      (user.rid = rid),
        (user.sid = id),
        (user.requests = "pending"),
        await user.save();
      return res.status(200).send(user);
    } else if (request == "cancel") {
      const user = await userRequest.findOneAndUpdate(
        { sid: rid, rid: id },
        { requests: "cancel" }
      );
      console.log(user);
      return res.status(200).send(user);
    } else if (request == "accept") {
      let user = await userRequest.findOneAndUpdate(
        { sid: rid, rid: id },
        { requests: "accept" }
      );
      return res.status(200).send(user);
    }
  } catch (error) {
    return res.status(400).json({ error });
  }
};
const getRequest = async (req,res)=>{
  const { rid } = req.body;
  try {
    let user = await userRequest.find();
    console.log(user);

    return res.status(200).send(user);
  } catch (error) {
    return res.status(400).json({ error });
  }
}
const deleteRequest = async (req,res)=>{
  const id  = req.params.id;
  try {
    let user = await userRequest.findByIdAndDelete(id);
    console.log(user);

    return res.status(200).send(user);
  } catch (error) {
    return res.status(400).json({ error });
  }
}
const viewRequest = async (req, res) => {
  const { uid, id, rid } = req.body;
  try {
    let user = await userRequest.findOne({
      rid: rid,
      sid: id,
    });

    return res.status(200).send(user);
  } catch (error) {
    return res.status(400).json({ error });
  }
};
const viewAllRequest = async (req, res) => {
  const { rid } = req.body;
  try {
    let user = await userRequest.find({
      rid: rid,
      requests: "pending",
      // requests: "accept",

    });
    console.log(user);

    const ids = user.map((val) => val.sid);
    let users = await userProfiles.find({ _id: { $in: ids } });
    return res.status(200).send(users);
  } catch (error) {
    return res.status(400).json({ error });
  }
};
const viewAcceptRequest = async (req, res) => {
  const { rid } = req.body;
  try {
    let user = await userRequest.find({
      rid: rid,
      requests: "accept"
    });
    console.log(user);

    const ids = user.map((val) => val.sid);
    let users = await userProfiles.find({ _id: { $in: ids } });
    return res.status(200).send(users);
  } catch (error) {
    return res.status(400).json({ error });
  }
};
const viewFav = async (req, res) => {
  const { id } = req.body;
  try {
    let user = await userProfiles.findById(id);
    const ids = user.favourites;
    let users = await userProfiles.find({ _id: { $in: ids } });
    return res.status(200).send(users);
  } catch (error) {
    return res.status(400).json({ error });
  }
};
// const findMatch = async (req, res) => {
//   const { id } = req.body;
//   try {
//     let user = await userProfiles.findById(id);
//     let allUser = await userProfiles.aggregate(
//       [{
//         $match: {
//           status: user.status,
//           religiousStatus: user.religiousStatus,
//           professional: user.professional
//         }
//       }]
//     );
//     return res.status(200).send(allUser);
//   } catch (error) {
//     return res.status(400).json({ error });
//   }
// };

const findMatch = async (req, res) => {
  const userId = req.body.id;
  userProfiles.findById(userId, (err, user) => {
    if (err) {
      return res.status(500).send(err);
    }
    // Find profiles with at least 5 matching fields and exclude the logged in user
    userProfiles.find(
      {
        _id: { $ne: userId, $nin: user.Block },
        gender: { $in: ["Male", "Female"].filter((g) => g !== user.gender) },
        $and: [
          {
            age: { $gte: parseInt(user.age) - 2, $lte: parseInt(user.age) + 2 },
          },
          { status: user.status },
          { religious: user.religious },
          { otherreligion: user.otherreligion },
          { sect: user.sect },
          { professional: user.professional },
          // { income: user.income },
          // Other fields here
        ],
      },
      (err, profiles) => {
        if (err) {
          return res.status(500).send(err);
        }
        return res.send(profiles);
      }
    );
  });
};

const search = async (req, res) => {
  // Extract the search query from the request body
  const { gender, max_age, min_age, country, userId, height,
    martialstatus,province,
   professional,
   sect,city,
   religious } = req.body;
console.log(req.body);
  // Use the find method to search for documents in the collection
  userProfiles.find(
    {
  
      gender: gender,
      age: { $gte: parseInt(min_age), $lte: parseInt(max_age) },
      nationality: country,
      height,
      status:martialstatus,province,
     professional,
     sect,city,
     religious
    },
    (err, users) => {
      console.log(users);
      if (err) {
        return res.status(500).send(err);
      }
      // Return the search results
      return res.send(users);
    }
  );
};
const latest = async (req,res)=>{
  const id = req.params.id;
  let userPrefrence;
  let pref = await preference.find({userId: id});
  userPrefrence = pref[0]._doc;
  console.log(userPrefrence)
  const user = await userProfiles.find({
    $or: [
      { age:userPrefrence.age },
      { religious:userPrefrence.religious },
      { nationality:userPrefrence.otherNationalities },
      {professional:userPrefrence.profession},
      {religiousStatus:userPrefrence.religiousStatus},
      {caste:userPrefrence.caste},
      {clan:userPrefrence.clan},
      {income:userPrefrence.monthlyIncome},
      {montherTonque:userPrefrence.montherTonque},
      {looks:userPrefrence.looks},
      {complexion:userPrefrence.complexion},
      {build:userPrefrence.build},
      {nationality:userPrefrence.country},
      {socialEconomic:userPrefrence.socioeconomicStatus},
      {siblingsCountBrothers:userPrefrence.BrotherCount},
      {siblingsCountSisters:userPrefrence.SisterCount},
    ],
  });
  console.log(user);
  // if(user.gender === "Male"){
  //   const userProfile = await userProfiles.find({ gender: "Female" }).sort({$natural:-1});
  //   return res.status(200).send(userProfile);
  // }else {
  //   const user = await userProfiles.find({ gender: "Male" }).sort({$natural:-1});
    return res.status(200).send(user);
  // }
};
module.exports = {
  OnlineUser,
  addToFav,latest,
  sentRequest,
  viewRequest,
  deleteRequest,getRequest,
  viewFav,
  nearBy,
  findMatch,
  viewAllRequest,viewAcceptRequest,
  search,
};
