const express = require("express");
const path = require("path");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./dbConnection");
const Product = require("./Models/productModel");
const User = require("./Models/userModel");
const Cart = require("./Models/cartModel");
const products = require("./data/products");
const users = require("./data/users");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.json());

app.use(cors());
dotenv.config();
app.use(express.static(path.join(__dirname, "client/build")));
app.use('/', express.static('client'));
const PREFIX = "/api";

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname+'/client/build/index.html'));
});
connectDB();
const http = require("http");
const { db } = require("./Models/productModel");
const server = http.createServer(app);


app.get(`${PREFIX}/products`, async (req, res) => {
  const productsFromDB = await Product.find({});
  console.log(productsFromDB)
  res.send(productsFromDB);
 
});
app.get(`${PREFIX}/products/:category`, async (req, res) => {
  console.log(req.params.category);
  let products = await Product.find({ category: req.params.category });
  console.log(products);

  res.status(200).send(products);
});

app.post(`${PREFIX}/newProduct`, async (req, res) => {
  console.log(req.body.newProduct);
  const product = await Product.create(req.body.newProduct);

  product.save();
  const products = await Product.find({});
  res.send(products);
});



app.put(`${PREFIX}/updateproduct`, async (req, res) => {
  try {
    await Product.deleteMany();
    Product.insertMany(req.body.products);

    console.log("BODY: ", req.body.products);
    console.log("products have been updated succsesfully");

    res.send(req.body);
  } catch {
    res.status(500).send("update product failed");
  }
});


app.delete(`${PREFIX}/removeproduct/:id`, async (req, res) => {
  try {
    console.log(req.params);
    await Product.findOneAndDelete({ _id: req.params.id });
    console.log("product removed !");
    const products = await Product.find();
    res.send(products);
  } catch {
    console.log("error occured while deleting product");
  }
});


app.post(`${PREFIX}/login`, async (req, res) => {
  console.log(req.body);
  const user = await User.findOne({
    username: req.body.username,
    password: req.body.password,
  });
  console.log(user);
  console.log(user._id);
  const cart = await Cart.findOne({ userID: user._id });

  if (user && user.isAdmin === true) {
    res.send({
      loginSucces: true,
      isAdmin: true,
      userData: {
        username: user.username,
        email: user.email,
        address: user.address,
      },
      cart: cart,
    });
  } else if (user && user.isAdmin === false) {
    res.send({
      loginSucces: true,
      isAdmin: false,
      userData: {
        username: user.username,
        email: user.email,
        address: user.address,
      },
      cart: cart,
    });
  } else {
    res.send({ loginSucces: false, isAdmin: false });
  }
  io.sockets.emit("login", "login just happend !");
});

//update user
app.post(`${PREFIX}/updateuser`, async (req, res) => {
  console.log(req.body);
  const user = await User.findOneAndUpdate(
    { username: req.body.userData.username },
    {
      username: req.body.userData.username,
      email: req.body.userData.email,
      address: req.body.userData.address,
    },
    {
      new: true,
    }
  );
  console.log("updated user:", user);
  res.send("ok");
  // user.email = req.body.email;
  // user.adress = req.body.adress;
  // user.save();
});

//set cart

app.post(`${PREFIX}/setcart`, async (req, res) => {
  console.log(req.body);
  console.log(req.body.username);
  const user = await User.find({ username: req.body.username });
  const userID = user[0]._id;
  const cart = await Cart.find({ userID: userID });
  console.log("cart :", cart);
  if (cart.length === 0) {
    const cart = await Cart.create({
      userID: userID,
      cartItems: req.body.cartItems,
    });
    cart.save();
  } else {
    await Cart.findOneAndUpdate(
      { userID: userID },
      { cartItems: req.body.cartItems }
    );
  }

  const updatedCart = await Cart.find({ userID: userID });

  // console.log(user[0]._id);
  // req.body.cartItems.map((item) => console.log(item));
  res.send(updatedCart[0]);
});
server.listen(process.env.PORT || 5000, () => {
  console.log(`server listening on port ${process.env.PORT}`);
});






