const express = require("express");
const router = express.Router();
const { Posts } = require("../models");

//app.use(express.json());



router.get("/", async(req, res) => {
    const listOfPosts = await Posts.findAll();
    res.json(listOfPosts);
});


router.post("/", async(req, res) => {
    const post = req.body;
    await Posts.create(post);
    res.json(post);
});
/*router.delete('');
router.push(''); */

module.exports = router;