const express = require("express");

const adminRouter = express.Router();

adminRouter.route("/add-products").get((req, res, next) => {
  res.send(
    "<form action='/admin/products' method='POST'><input type='text' name='input' /><button type='submit' >Add User </button></form>"
  );
});

adminRouter.route("/products").post((req, res, next) => {
  console.log(req.body);
  res.redirect("/");
});

module.exports = adminRouter;
