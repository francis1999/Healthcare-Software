const express = require("express");
const db = require("../models");
const router = express.Router();
const { Registrations } = require("../models");
const bcrypt = require("bcrypt");
//onst validateToken = require('../middleware/AuthMiddleware');
const { sign } = require("jsonwebtoken");

//app.use(express.json());


router.post("/", /* validateToken, */ async (req, res) => {
    const { username, password } = req.body;
    const user = await Registrations.findOne({ where: { username: username } });
    if (!user) res.json({ error: "Username Does Not Exist" });
    bcrypt.compare(password, user.password).then(async (match) => {
        if (!match) res.json({ error: "Wrong Username or Password" });
        const accessToken = sign({ username: user.username, id: user.id },
            "importantsecret")
        res.json(accessToken);
        /*  res.json("You have Successfull Logged in"); */

    });

});


module.exports = router;