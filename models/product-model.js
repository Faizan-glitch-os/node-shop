const path = require("path");
const fs = require("fs");

const filePath = path.join(__dirname, "..", "data", "products.json");

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
    this.id = Math.random().toFixed(4).toString();
    getProductsFile((products) => {
      products.push(this);
      fs.writeFile(filePath, JSON.stringify(products), (err) => {
        console.log(err);
      });
    });
  }

  static getAllProduct(callBack) {
    getProductsFile(callBack);
  }

  static getProduct(id, callBack) {
    getProductsFile((products) => {
      const product = products.find((p) => p.id === id);
      callBack(product);
    });
  }
};
