const express = require("express");
const router = express.Router();
const data = require("../config/data");
const User = require("../models/user");
const { mongoose, Types } = require("mongoose");
const { JWT_SECRET_KEY } = require("../config");
const jwt = require("jsonwebtoken");
const Auth = require("../middlewares/Auth")

// router.get("/user", (req,res) =>{
//     res.send("I am user")
// })

router.get("/", async (req, res) => {
  try {
    // console.log(User, "--------------------------");
    const findUser = User.find({ userName: req.body.userName}, function (err, docs) {
      if (err){
        return res
        .status(400)
        .send({ status: 400, message: error.message, data: [] });
      }
  });
    res.send({ findUser });
  } catch (error) {
    return res
    .status(401)
    .send({ status: 401, message: error.message, data: [] });
  }
});

router.put("/generateToken", async (req, res) => {
  try {
    // console.log(User,"--------------------------")
    const updateUser = await User.updateOne(
      { _id: Types.ObjectId(req.query.id) },
      {
        $set: { token: jwt.sign(req.query, JWT_SECRET_KEY) },
      }
    );
    // const createdUser = new User(req.body);
    // await createdUser.save()
    res.send({ updateUser });
  } catch (error) {
    return res
    .status(402)
    .send({ status: 402, message: error.message, data: [] });
  }
});


//Posting  a Student Record
router.post("/student",Auth, async (req, res) => {
  try {
    // console.log("dfgjsdfjsdlk;fjsdiojfi")
    const createdUser = new User(req.body);
    await createdUser.save();
    res.send({ createdUser });
  } catch (error) {
    return res
    .status(400)
    .send({ status: 401, message: error.message, data: [] });
  }
});

module.exports = router;
