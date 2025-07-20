const Cart = require("./cart-model");
const db = require("../utils/database");

module.exports = class Product {
  constructor(title, img, price, description) {
    this.title = title;
    this.img = img;
    this.price = price;
    this.description = description;
  }

  saveNewProduct() {
    return db.execute(
      "INSERT INTO products (title, img, price, description) VALUES (?, ?, ?, ?)",
      [this.title, this.img, this.price, this.description]
    );
  }

  static editProduct(id, title, img, price, description) {
    return db.execute(
      "UPDATE products SET title = ?, img = ?, price = ?, description = ? WHERE products.id = ?",
      [title, img, price, description, id]
    );
  }

  static deleteProductById(id) {
    return db.execute("DELETE FROM products WHERE products.id = ? ", [id]);
  }

  static getAllProduct() {
    return db.execute("SELECT * FROM products");
  }

  static getProductById(id) {
    return db.execute("SELECT * FROM products WHERE products.id = ?", [id]);
  }
};
