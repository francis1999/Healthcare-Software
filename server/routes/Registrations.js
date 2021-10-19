const express = require("express");
const db = require("../models");
const router = express.Router();
const { Registrations } = require("../models");
const bcrypt = require("bcrypt");
const { sign } = require("jsonwebtoken");
//app.use(express.json());


router.post("/", async (req, res) => {
    const { Surname, Othernames, Username, Email, PhoneNumber, Password, PasswordConfirmation } = req.body;
    bcrypt.hash(Password && PasswordConfirmation, 10).then((hash) => {
        Registrations.create({
            surname: Surname,
            othernames: Othernames,
            username: Username,
            email: Email,
            phoneNumber: PhoneNumber,
            password: hash,
            passwordConfirmation: hash,
        });
        res.json("Registration Successfull");
    });
    //res.json(Registrations);
});

router.post("/Login", async (req, res) => {
    const { Username, Password } = req.body;
    const user = await Registrations.findOne({ where: { username: Username } });
    if (!user) res.json({ error: "Username Does Not Exist" });
    bcrypt.compare(password, user.Password).then((match) => {
        if (!match) res.json({ error: "Wrong Username and Password" });

        //this is the code for authorizaation using jsonwebtoken
        const accessToken = sign({ username: user.username, id: user.id },
            "importantsecret")
        res.json(accessToken);
    });
});
module.exports = router;