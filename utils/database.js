const Sequelize = require("sequelize");

const sequelize = new Sequelize("node-app", "root", "kakanana", {
  dialect: "mysql",
  host: "localhost",
});

module.exports = sequelize;
