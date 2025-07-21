const express = require("express");
const bodyParser = require("body-parser");
const dbSequelize = require("./utils/database");
const Product = require("./models/product-model");
const User = require("./models/user-model");

const path = require("path");

const adminRouter = require("./routes/admin");
const shopRouter = require("./routes/shop");
const errorController = require("./controllers/error-controller");
const Cart = require("./models/cart-model");
const CartItem = require("./models/cart-item-model");

const app = express();

//set ejs as templating engine
app.set("view engine", "ejs");
//set views as path for templates
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

//product has many to one relation with user
Product.belongsTo(User, { constraints: true, onDelete: "CASCADE" });
//user has one to many relation with product
User.hasMany(Product);
//user has only one cart
User.hasOne(Cart);
//one cart belongs to one user
Cart.belongsTo(User);
//one cart has many products
Cart.belongsToMany(Product, { through: CartItem });
//one product has many carts
Product.belongsToMany(Cart, { through: CartItem });

dbSequelize
  .sync()
  .then(() =>
    //find the first user
    User.findByPk(1)
      .then((user) => {
        //if no user, then create one
        if (!user) {
          //return the created user
          return User.create({ name: "test", email: "test@test.com" });
        }
        //if user then return the user
        return user;
      })
      .then(() => app.listen(3000))
  )
  .catch((err) => console.log(err));
