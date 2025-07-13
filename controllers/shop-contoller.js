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

exports.getProduct = (req, res, next) => {
  console.log("get product route");
  Product.getProduct(req.params.productId, (product) => {
    console.log(product);
  });
  res.redirect("/");
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

exports.getOrders = (req, res, next) => {
  res.render("shop/orders", {
    pageTitle: "Orders",
    path: "orders",
  });
};

exports.getCheckout = (req, res, next) => {
  res.render("shop/checkout", {
    pageTitle: "Checkout",
    path: "checkout",
  });
};
