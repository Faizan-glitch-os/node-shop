const path = require("path");

const express = require("express");

const adminController = require("../controllers/admin-controller");

const adminRouter = express.Router();

adminRouter
  .route("/add-products")
  .get(adminController.getAddProducts)
  .post(adminController.postAddProducts);

adminRouter.route("/product").get(adminController.getAdminProduct);

module.exports = adminRouter;
