const path = require("path");
const fs = require("fs");
const Cart = require("./cart-model");

//get path to the file
const filePath = path.join(__dirname, "..", "data", "products.json");

//read the file and return to the callback
const getProductsFile = (callBack) => {
  fs.readFile(filePath, (err, fileContent) => {
    if (err) {
      return callBack([]);
    }
    callBack(JSON.parse(fileContent));
  });
};

module.exports = class Product {
  constructor(title, img, price, description) {
    this.title = title;
    this.img = img;
    this.price = price;
    this.description = description;
  }

  save() {
    //add id to the product
    this.id = Math.random().toFixed(4).toString();

    //read product file
    getProductsFile((products) => {
      //add product to array
      products.push(this);

      //write updated products array to file system
      fs.writeFile(filePath, JSON.stringify(products), (err) => {
        console.log(err);
      });
    });
  }

  static editProduct(id, title, img, price, description, callBack) {
    getProductsFile((products) => {
      const existingIndex = products.findIndex((product) => product.id === id);
      const existingProduct = products[existingIndex];

      if (existingProduct) {
        const updatedProduct = {
          id,
          title,
          img,
          price,
          description,
        };
        products[existingIndex] = updatedProduct;

        fs.writeFile(filePath, JSON.stringify(products), (err) => {
          callBack(err);
        });
      }
    });
  }

  static deleteProduct(id) {
    getProductsFile((products) => {
      const updatedProducts = products.filter((product) => product.id !== id);

      fs.writeFile(filePath, JSON.stringify(updatedProducts), (err) => {
        if (!err) {
          //also delete product from cart
          Cart.deleteProduct(id);
        }
      });
    });
  }

  static getAllProduct(callBack) {
    //get products from file system
    getProductsFile(callBack);
  }

  static getProduct(id, callBack) {
    //read products from file system
    getProductsFile((products) => {
      //find the product
      const product = products.find((p) => p.id === id);

      //return product to callback
      callBack(product);
    });
  }
};
