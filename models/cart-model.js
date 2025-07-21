const Sequelize = require("sequelize");
const dbSequelize = require("../utils/database");

const Cart = dbSequelize.define("cart", {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    allowNull: false,
    autoIncrement: true,
  },
});

module.exports = Cart;
