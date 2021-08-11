const { Router } = require("express");
const express = require("express");
const userModel = require("./../models/userForm");
const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken');
const auth = require("./../auth")

const router = express.Router();

router.get("/alluser",async (req, res) => {
    let data = await userModel.find({})
    // console.log(data)
    res.json({data: data})
})

router.post('/signup', async (req, res) => {
    console.log(req.body)
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(req.body.password, salt);
    console.log(hash)
    const userType = req.body.userType ? req.body.userType : "user"
    const myData = await new userModel({
        email: req.body.email,
        phone: req.body.number,
        name: req.body.name,
        password: hash,
        userType: userType
    })
    await myData.save()
    .then(data => {
        let jwtToken = jwt.sign({ id: data._id, userType: data.userType }, "venkatesh")
        res.status(200).json({token: jwtToken})
    })
    .catch(err => res.send(err))
})


module.exports = router; 