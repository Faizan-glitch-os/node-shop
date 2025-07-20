const fs = require("fs");
const path = require("path");

//get path to the product-model
const filePath = path.join(__dirname, "..", "data", "cart.json");

module.exports = class Cart {
  static addToCart(id, price) {
    let cart = { products: [], totalPrice: 0 };

    //read cart data from file system
    fs.readFile(filePath, (err, fileContent) => {
      if (!err) {
        cart = JSON.parse(fileContent);
      }

      //check product index
      const existingIndex = cart.products.findIndex((prod) => prod.id === id);

      //get product based on index
      const existingProduct = cart.products[existingIndex];
      let updatedProduct;

      //if product already exist
      if (existingProduct) {
        updatedProduct = { ...existingProduct };

        //increase quantity by 1
        updatedProduct.quantity++;
        cart.products = [...cart.products];

        //replace the existing product with updated
        cart.products[existingIndex] = updatedProduct;
      } else {
        //if product not exist then add product
        updatedProduct = { id: id, quantity: 1 };

        //add new product to the cart
        cart.products = [...cart.products, updatedProduct];
      }

      //increase products total price
      cart.totalPrice += +price;

      //write cart to the file system
      fs.writeFile(filePath, JSON.stringify(cart), (err) => {
        console.log(err, "write");
      });
    });
  }

  static deleteProduct(id, price) {
    //read cart from file
    fs.readFile(filePath, (err, fileContent) => {
      if (err) {
        return;
      }
      const updatedCart = { ...JSON.parse(fileContent) };

      //find the product based on id
      const product = updatedCart.products.find((product) => product.id === id);

      if (!product) {
        return;
      }

      //find the quantity in cart
      const productQty = product.quantity;

      //remove the product from cart
      updatedCart.products = updatedCart.products.filter(
        (product) => product.id !== id
      );

      //update the total price of cart
      updatedCart.totalPrice = updatedCart.totalPrice - price * productQty;

      //write the updated cart to the file
      fs.writeFile(filePath, JSON.stringify(updatedCart), (err) => {
        console.log(err);
      });
    });
  }

  static getCart(callBack) {
    fs.readFile(filePath, (err, fileContent) => {
      if (err) {
        callBack(null);
      } else {
        callBack(JSON.parse(fileContent));
      }
    });
  }
};
