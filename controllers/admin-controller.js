const Product = require("../models/product-model");

exports.getAddProducts = (req, res, next) => {
  res.render("admin/add-product", {
    pageTitle: "Add Product",
    path: "admin/add-product",
  });
};

exports.postAddProducts = (req, res, next) => {
  const product = new Product(
    req.body.title,
    req.body.img,
    req.body.price,
    req.body.description
  );
  product.save();
  res.redirect("/product-list");
};

exports.editProduct = (req, res, next) => {
  res.render("admin/edit-product", {
    pageTitle: "Edit Product",
    path: "admin/edit-product",
  });
};

exports.getAdminProduct = (req, res, next) => {
  res.render("admin/product", {
    pageTitle: "Admin Product",
    path: "admin/product",
  });
};
