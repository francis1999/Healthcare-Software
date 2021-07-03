const express = require("express");
const db = require("../models");
const router = express.Router();
const { Registrations } = require("../models");
const bcrypt = require("bcrypt");
const { sign } = require("jsonwebtoken");
//app.use(express.json());


router.post("/", async(req, res) => {
    const { Surname, Othernames, Username, Email, PhoneNumber, Password, PasswordConfirmation } = req.body;
    bcrypt.hash(Password && PasswordConfirmation, 10).then((hash) => {
        Registrations.create({
            Surname: Surname,
            Othernames: Othernames,
            Username: Username,
            Email: Email,
            PhoneNumber: PhoneNumber,
            Password: hash,
            PasswordConfirmation: hash,
        });
        res.json("Registration Successfull");
    });
    res.json(registration);
});

router.post("/Login", async(req, res) => {
    const { Username, Password } = req.body;
    const user = await Registrations.findOne({ where: { Username: Username } });
    if (!user) res.json({ error: "Username Does Not Exist" });
    bcrypt.compare(Password, user.Password).then((match) => {
        if (!match) res.json({ error: "Wrong Username and Password" });

        //this is the code for authorizaation using jsonwebtoken
        const accessToken = sign({ Username: user.Username, id: user.id },
            "importantsecret")
        res.json(accessToken);
    });
});
module.exports = router;