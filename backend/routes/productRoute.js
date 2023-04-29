const express = require("express");
const { getallProducts } = require("../controllers/productController");

const router= express.Router();

router.route("/products").get(getallProducts)
module.express = router