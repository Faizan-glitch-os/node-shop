const Product = require("../models/product-model");

exports.getProducts = (req, res, next) => {
  Product.getAllProducts((products) => {
    res.render("shop", {
      pageTitle: "Shop",
      products: products,
    });
  });
};
