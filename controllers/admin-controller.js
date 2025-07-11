exports.getAddProductsPage = (req, res, next) => {
  res.render("add-product", { pageTitle: "Add Product" });
};

exports.postAddProductsPage = (req, res, next) => {
  res.redirect("/");
};
