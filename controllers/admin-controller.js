const Product = require("../models/product-model");

exports.getAddProducts = (req, res, next) => {
  res.render("admin/add-product", {
    pageTitle: "Add Product",
    path: "admin/add-product",
    editing: "",
  });
};

exports.saveNewProduct = (req, res, next) => {
  //create product based on current user
  req.user
    .createProduct({
      title: req.body.title,
      img: req.body.img,
      price: req.body.price,
      description: req.body.description,
    })
    .then(() => res.redirect("/admin/product"))
    .catch((err) => console.log(err));
};

exports.getAdminProducts = (req, res, next) => {
  //get products based on current user
  req.user
    .getProducts()
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

  //get product based on current user
  req.user
    .getProducts({ where: { id: id } })
    .then((product) => {
      res.render("admin/add-product", {
        pageTitle: product.title,
        path: "edit-product",
        editing: editing,
        prod: product[0],
      });
    })
    .catch((err) => console.log(err));
};

exports.postEditProduct = (req, res, next) => {
  const title = req.body.title;
  const img = req.body.img;
  const price = req.body.price;
  const description = req.body.description;
  const id = req.params.productId;

  Product.update(
    { title: title, img: img, price: price, description: description },
    { where: { id: id } }
  )
    .then(() => {
      res.redirect("/admin/product");
    })
    .catch((err) => console.log(err));
};
