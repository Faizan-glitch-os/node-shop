const Product = require("../models/product-model");

exports.getAddProducts = (req, res, next) => {
  res.render("admin/add-product", {
    pageTitle: "Add Product",
    path: "admin/add-product",
    editing: "",
  });
};

exports.saveNewProduct = (req, res, next) => {
  const product = new Product(
    req.body.title,
    req.body.img,
    req.body.price,
    req.body.description
  );
  product
    .saveNewProduct()
    .then(() => res.redirect("/product-list"))
    .catch((err) => console.log(err));
};

exports.getAdminProducts = (req, res, next) => {
  Product.getAllProduct()
    .then(([products]) =>
      res.render("admin/product", {
        pageTitle: "Admin Products",
        path: "admin-products",
        prod: products,
      })
    )
    .catch((err) => console.log(err));
};

exports.deleteProduct = (req, res, next) => {
  const id = req.params.productId;

  Product.deleteProductById(id)
    .then(() => {
      res.redirect("/admin/product");
    })
    .catch((err) => console.log(err));
};

exports.getEditProduct = (req, res, next) => {
  const editing = req.query.editing;
  const id = req.params.productId;
  console.log(editing, id);
  if (!editing) {
    return res.redirect("/");
  }
  Product.getProduct(id, (product) => {
    if (!product) {
      return res.redirect("/");
    }
    res.render("admin/add-product", {
      pageTitle: "Edit Product",
      path: "admin/edit-product",
      prod: product,
      editing: editing,
    });
  });
};

exports.postEditProduct = (req, res, next) => {
  const title = req.body.title;
  const img = req.body.img;
  const price = req.body.price;
  const description = req.body.description;
  const id = req.params.productId;

  Product.editProduct(id, title, img, price, description, () => {
    res.redirect("/admin/product");
  });
};
