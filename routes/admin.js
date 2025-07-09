const path = require("path");

const express = require("express");

const adminRouter = express.Router();

adminRouter.route("/add-products").get((req, res, next) => {
  res.sendFile(path.join(__dirname, "../", "views", "add-product.html"));
});

adminRouter.route("/products").post((req, res, next) => {
  console.log(req.body);
  res.redirect("/");
});

module.exports = adminRouter;
