const express = require("express");
const router = express.Router();
const Products = require("../models/Products");
//app.use(express.json());


router.post("/", async (req, res) => {
    const Product = req.body;
    await Products.create(Product);
    res.json(Product);
});
/*router.delete('');
    router.push(''); */

module.exports = router;