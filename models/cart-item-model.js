const Sequelize = require("sequelize");
const dbSequelize = require("../utils/database");

const CartItem = dbSequelize.define("cartItem", {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    allowNull: false,
    autoIncrement: true,
  },
  quantity: Sequelize.INTEGER,
});

module.exports = CartItem;
