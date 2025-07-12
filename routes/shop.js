const path = require("path");

const express = require("express");

const shopController = require("../controllers/shop-contoller");

const shopRouter = express.Router();

shopRouter.route("/").get(shopController.getIndex);

shopRouter.route("/product-list").get(shopController.getProductList);

shopRouter.route("/cart").get(shopController.getCart);

shopRouter.route("/checkout").get(shopController.getCheckout);

module.exports = shopRouter;
