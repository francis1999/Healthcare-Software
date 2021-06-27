const express = require("express");
const router = express.Router();
const { Registrations } = require("../models");
//app.use(express.json());


router.post("/", async(req, res) => {
    const registration = req.body;
    await Registrations.create(registration);
    res.json(registration);
    /*  if (err) {
         res.status(400).json({
             message: "Error in Connection",
             post: result
         })
     } else {
         res.status(201).json({
             message: "Data Entered Successfully",
             post: result
         })
     } */

});
/*router.delete('');
    router.push(''); */

module.exports = router;