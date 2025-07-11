const path = require("path");

const express = require("express");

const adminController = require("../controllers/admin-controller");

const adminRouter = express.Router();

adminRouter
  .route("/add-products")
  .get(adminController.getAddProductsPage)
  .post(adminController.postAddProductsPage);

module.exports = adminRouter;
