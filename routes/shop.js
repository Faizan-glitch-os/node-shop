const express = require("express");

const shopRouter = express.Router();

shopRouter.route("/").get((req, res, next) => {
  res.send("<h1> Homepage </h1>");
});

module.exports = shopRouter;
