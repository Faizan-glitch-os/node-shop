const express = require("express");

const shopController = require("../controllers/shop-contoller");

const shopRouter = express.Router();

shopRouter.route("/").get(shopController.getIndex);

shopRouter.route("/product-list").get(shopController.getProductList);

shopRouter.route("/product-list/:productId").post(shopController.getProduct);

shopRouter.route("/cart").get(shopController.getCart);

shopRouter.route("/cart").post(shopController.postCart);

shopRouter
  .route("/cart-delete-product")
  .post(shopController.postDeleteCartProduct);

shopRouter.route("/orders").get(shopController.getOrders);

shopRouter.route("/checkout").get(shopController.getCheckout);

module.exports = shopRouter;
