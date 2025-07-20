const express = require("express");

const adminController = require("../controllers/admin-controller");

const adminRouter = express.Router();

adminRouter
  .route("/delete-product/:productId")
  .post(adminController.deleteProduct);

adminRouter
  .route("/add-products")
  .get(adminController.getAddProducts)
  .post(adminController.saveNewProduct);

adminRouter.route("/product").get(adminController.getAdminProducts);

adminRouter
  .route("/edit-product/:productId")
  .get(adminController.getEditProduct)
  .post(adminController.postEditProduct);

module.exports = adminRouter;
