const Cart = require("../models/cart-model");
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
  Product.getProduct(req.params.productId, (product) => {
    res.render("shop/product-details", {
      prod: product,
      pageTitle: product.title,
      path: "product-list",
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

exports.postCart = (req, res, next) => {
  const productId = req.body.productId;

  console.log(productId);

  Product.getProduct(productId, (product) => {
    Cart.addToCart(productId, product.price);
    res.render("shop/cart", {
      pageTitle: "Cart",
      path: "cart",
    });
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
