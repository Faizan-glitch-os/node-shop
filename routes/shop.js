const path = require("path");

const express = require("express");

const shopController = require("../controllers/shop-contoller");

const shopRouter = express.Router();

shopRouter.route("/").get(shopController.getProducts);

module.exports = shopRouter;
