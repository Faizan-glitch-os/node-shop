const Sequelize = require("sequelize");
const Cart = require("../models/cart-model");
const Product = require("../models/product-model");

exports.getAllProducts = (req, res, next) => {
  Product.findAll()
    .then((products) =>
      res.render("shop/product-list", {
        pageTitle: "Products",
        path: "product-list",
        prod: products,
      })
    )
    .catch((err) => console.log(err));
};

exports.getProductById = (req, res, next) => {
  const id = req.params.productId;

  Product.findByPk(id)
    .then((product) => {
      res.render("shop/product-details", {
        pageTitle: product.title,
        path: "",
        prod: product,
      });
    })
    .catch((err) => console.log(err));
};

exports.getIndex = (req, res, next) => {
  res.render("shop/index", {
    pageTitle: "Shop",
    path: "shop",
  });
};

exports.getCart = (req, res, next) => {
  Cart.getCart((cart) => {
    Product.getAllProduct((products) => {
      const cartProducts = [];

      for (product of products) {
        const cartProductData = cart.products.find(
          (prod) => prod.id === product.id
        );
        if (cartProductData) {
          cartProducts.push({
            productData: product,
            quantity: cartProductData.quantity,
          });
        }
      }
      res.render("shop/cart", {
        pageTitle: "Cart",
        path: "cart",
        prod: cartProducts,
      });
    });
  });
};

exports.postDeleteCartProduct = (req, res, next) => {
  const productId = req.body.productId;

  Product.getProduct(productId, (product) => {
    Cart.deleteProduct(productId, product.price);
    res.redirect("/cart");
  });
};

exports.postCart = (req, res, next) => {
  const productId = req.body.productId;

  console.log(productId);

  Product.getProduct(productId, (product) => {
    Cart.addToCart(productId, product.price);
    res.redirect("/cart");
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
