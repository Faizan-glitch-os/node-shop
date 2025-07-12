const Product = require("../models/product-model");

exports.getProductList = (req, res, next) => {
  Product.getAllProduct((products) => {
    res.render("shop/product-list", {
      pageTitle: "Shop",
      path: "product-list",
      products: products,
    });
  });
};

exports.getIndex = (req, res, next) => {
  res.render("shop/index", {
    pageTitle: "Shop",
    path: "shop",
  });
};

exports.getCart = (req, res, next) => {
  res.render("shop/cart", {
    pageTitle: "Cart",
    path: "cart",
  });
};

exports.getCheckout = (req, res, next) => {
  res.render("shop/checkout", {
    pageTitle: "Checkout",
    path: "checkout",
  });
};
