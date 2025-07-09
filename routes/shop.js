const path = require("path");

const express = require("express");

const shopRouter = express.Router();

shopRouter.route("/").get((req, res, next) => {
  res.sendFile(path.join(__dirname, "..", "views", "shop.html"));
});

module.exports = shopRouter;
