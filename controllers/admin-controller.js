const Product = require("../models/product-model");

exports.getAddProductsPage = (req, res, next) => {
  res.render("admin/add-product", {
    pageTitle: "Add Product",
    path: "admin/add-product",
  });
};

exports.postAddProductsPage = (req, res, next) => {
  const product = new Product(
    req.body.title,
    req.body.img,
    req.body.price,
    req.body.description
  );
  product.save();
  res.redirect("/product-list");
};
