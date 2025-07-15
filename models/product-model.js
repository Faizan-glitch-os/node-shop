const path = require("path");
const fs = require("fs");

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
