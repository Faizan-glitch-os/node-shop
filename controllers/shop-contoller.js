const Product = require("../models/product-model");

exports.getProducts = (req, res, next) => {
  Product.getAllProducts((products) => {
    res.render("shop/product-list", {
      pageTitle: "Shop",
      path: "product-list",
      products: products,
    });
  });
};

exports.cart = (req, res, next) => {
  res.render("shop/cart", {
    pageTitle: "Cart",
    path: "cart",
  });
};

exports.checkout = (req, res, next) => {
  res.render("shop/checkout", {
    pageTitle: "Checkout",
    path: "checkout",
  });
};

exports.index = (req, res, next) => {
  res.render("shop/index", {
    pageTitle: "Shop",
    path: "shop",
  });
};
