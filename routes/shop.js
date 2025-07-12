const path = require("path");

const express = require("express");

const shopController = require("../controllers/shop-contoller");

const shopRouter = express.Router();

shopRouter.route("/product-list").get(shopController.getProducts);
shopRouter.route("/cart").get(shopController.cart);
shopRouter.route("/checkout").get(shopController.checkout);
shopRouter.route("/").get(shopController.index);

module.exports = shopRouter;
