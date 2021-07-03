const express = require("express");
const db = require("../models");
const router = express.Router();
const { Registrations } = require("../models");
const bcrypt = require("bcrypt");
const validateToken = require('../middleware/AuthMiddleware');

//app.use(express.json());


router.post("/", /* validateToken, */ async(req, res) => {
    const { Username, Password } = req.body;
    const user = await Registrations.findOne({ where: { Username: Username } });
    if (!user) res.json({ error: "Username Does Not Exist" });
    bcrypt.compare(Password, user.Password).then((match) => {
        if (!match) res.json({ error: "Wrong Username and Password" });
        res.json("You have Successfull Loged in");
    });
});


module.exports = router;