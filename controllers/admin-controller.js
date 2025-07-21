const Product = require("../models/product-model");

exports.getAddProducts = (req, res, next) => {
  res.render("admin/add-product", {
    pageTitle: "Add Product",
    path: "admin/add-product",
    editing: "",
  });
};

exports.saveNewProduct = (req, res, next) => {
  Product.create({
    title: req.body.title,
    img: req.body.img,
    price: req.body.price,
    description: req.body.description,
  })
    .then(() => res.redirect("/admin/product"))
    .catch((err) => console.log(err));
};

exports.getAdminProducts = (req, res, next) => {
  Product.findAll()
    .then((products) =>
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

  Product.destroy({ where: { id: id } })
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
  Product.editProduct();
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
