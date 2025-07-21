const express = require("express");
const bodyParser = require("body-parser");
const sequelize = require("./utils/database");

const path = require("path");

const adminRouter = require("./routes/admin");
const shopRouter = require("./routes/shop");
const errorController = require("./controllers/error-controller");

const app = express();

app.set("view engine", "ejs");
app.set("views", "views");

app.use(bodyParser.urlencoded());
app.use(express.static(path.join(__dirname, "public")));

app.use("/admin", adminRouter);
app.use(shopRouter);

app.use(errorController.error);

sequelize
  .sync()
  .then(() => app.listen(3000))
  .catch((err) => console.log(err));
