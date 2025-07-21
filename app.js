const express = require("express");
const bodyParser = require("body-parser");
const dbSequelize = require("./utils/database");
const Product = require("./models/product-model");
const User = require("./models/user-model");

const path = require("path");

const adminRouter = require("./routes/admin");
const shopRouter = require("./routes/shop");
const errorController = require("./controllers/error-controller");

const app = express();

app.set("view engine", "ejs");
app.set("views", "views");

//to parse the request
app.use(bodyParser.urlencoded());
app.use(express.static(path.join(__dirname, "public")));

//to attach a default user to every request
app.use((req, res, next) => {
  User.findByPk(1)
    .then((user) => {
      req.user = user;
      next();
    })
    .catch((err) => console.log(err));
});

//admin path
app.use("/admin", adminRouter);
//default path
app.use(shopRouter);

app.use(errorController.error);

Product.belongsTo(User, { constraints: true, onDelete: "CASCADE" });
User.hasMany(Product);

dbSequelize
  .sync()
  .then(() =>
    //find the first user
    User.findByPk(1)
      .then((user) => {
        //if no user, then create one
        if (!user) {
          return User.create({ name: "test", email: "test@test.com" });
        }
        //if user then return the user
        return user;
      })
      .then(() => app.listen(3000))
  )
  .catch((err) => console.log(err));
