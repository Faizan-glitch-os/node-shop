const mysql2 = require("mysql2");

const pool = mysql2.createPool({
  host: "localhost",
  user: "root",
  database: "node-app",
  password: "kakanana",
});

module.exports = pool.promise();
