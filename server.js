const express = require("express");
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

connectDB();
const http = require("http");
const { db } = require("./Models/productModel");
const server = http.createServer(app);


app.get("/products", async (req, res) => {
  const productsFromDB = await Product.find({});
  console.log(productsFromDB)
  res.send(productsFromDB);
 
});
app.get("/products/:category", async (req, res) => {
  console.log(req.params.category);
  let products = await Product.find({ category: req.params.category });
  console.log(products);

  res.status(200).send(products);
});

app.post("/newProduct", async (req, res) => {
  console.log(req.body.newProduct);
  const product = await Product.create(req.body.newProduct);

  product.save();
  const products = await Product.find({});
  res.send(products);
});



app.put("/updateproduct", async (req, res) => {
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


app.delete("/removeproduct/:id", async (req, res) => {
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



app.delete("/deleteProduct", async (req, res) => {
  const product = Product.findOneAndDelete({});
  product.save();
});

app.post("/setcart", async (req, res) => {
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

  res.send(updatedCart[0]);
});






//create user

app.post("/login", async (req, res) => {
  console.log("new user", req.body);
  await User.create(req.body);
  const users = await User.find({});

  res.send(users);
});

//log in , check if an admin logged in if he does send to client that he did to enable admin funcions on client side

app.post("/login", async (req, res) => {
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
        PhoneNumber: user.PhoneNumber,
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
        PhoneNumber: user.PhoneNumber,
      },
      cart: cart,
    });
  } else {
    res.send({ loginSucces: false, isAdmin: false });
  }

});


app.post("/updateuser", async (req, res) => {
  console.log(req.body);
  const user = await User.findOneAndUpdate(
    { username: req.body.userData.username },
    {
      username: req.body.userData.username,
      email: req.body.userData.email,
      PhoneNumber: req.body.userData.PhoneNumber,
    },
    {
      new: true,
    }
  );
  console.log("updated user:", user);
  res.send("ok");
  user.email = req.body.email;
  user.PhoneNumber = req.body.PhoneNumber;
  user.save();
})


server.listen(process.env.PORT || 5000, () => {
  console.log(`server listening on port ${process.env.PORT}`);
});




// const express = require("express");
// const fs = require("fs");
// const app = express();
// const bodyParser = require("body-parser");
// const cors = require("cors");
// const axios = require('axios').default;
// const multer = require("multer");
// const morgan = require("morgan");
// const path  = require("path");
// const accessLogStream = fs.createWriteStream(
//   path.join(__dirname, "access.log"),
//   { flags: "a" }
// );
// const netServer = require('net').Server;

// const myLogger=(req,res,next) => {
//   console.log('user in site', Date.now());
//   next();
// }

// app.use((myLogger));
// app.use(bodyParser.json());
// app.use(express.json());
// app.use(cors());

// app.get("/", (req, res) => {
//   res.send("You are in the home page");
// });

// app.get("/image", (req, res) => {
//   res.send("Hello World!");
// });

// app.get("/products", (req, res) => {
//   console.log("QUERY:", req.query);
//   const search = req.query.search;
//   fs.readFile("products.json", (err, data) => {
//     const products = JSON.parse(data);
//     if (search) {
//       const filteredproducts = products.filter((product) => product.title.includes(search));
//       res.send(filteredproducts);
//     } else {
//       res.send(products);
//     }
//   });
// });

// app.post("/products", (req, res) => {
//   fs.readFile("products.json", (err, data) => {
//     const products = JSON.parse(data);
//     const title = req.body.title;
//     const image = req.body.image;
//     const quantity  = req.body. quantity;
//     const price = req.body.price;
//    products.push({
//       id: products.length + 1,
//       title: title,
//       image: image,
//       quantity: quantity,
//       price: price

//     });
//     fs.writeFile(products.json, JSON.stringify(products), (err) => {
//       //console.log(err);
//       res.send("YOU SUCCEED!!!");
//     });
//   });
// });


// app.delete("/products/:id", (req, res) => {
//   fs.readFile("products.json", (err, data) => {
//     const products = JSON.parse(data);
//     const poductId = +req.params.id;
//     const poductsIndex = poducts.findIndex((product) => product.id === productId);
//     products.splice( poductsIndex, 1);
//     fs.writeFile("products.json", JSON.stringify(poducts), (err) => {
//       res.send("YOU SUCCEED!!!");
//     });
//   });
// });


// app.put("/poducts/:id", (req, res) => {
//   fs.readFile("poducts.json", (err, data) => {
//     const  poducts = JSON.parse(data);
//     const  poductsId = +req.params.id;
//     const  poductsIndex = todos.findIndex((todo) => todo.id === todoId);
//     poducts[ poductsIndex].title = req.body.title;
//     fs.writeFile("products.json", JSON.stringify(poducts, (err) => {
//       res.send("updated");
//   }));
// });
// });
// app.post("/upload", (req, res) => {
//   req.pipe(fs.createWriteStream(`images/${req.query.filename}`));
//   res.send("כל הכבוד העלת קובץ ורשמת אותו בתוך תיקיית תמונות");
// });

// app.use("/images", express.static("images"));

// app.post("/admin", (req, res) => {
//   req.pipe(fs.createWriteStream(`images/${req.query.filename}`));
//    res.send("done!");
//  });

//  app.post("/Login", (req, res) => {
//   console.log(req.body);})
// app.get("/cart", (req, res) => {
//   console.log("QUERY:", req.query);
//   const search = req.query.search;
//   fs.readFile("products.json", (err, data) => {
//     const products = JSON.parse(data);
//     if (search) {
//       const filteredproducts = products.filter((product) => product.title.includes(search));
//       res.send(filteredproducts);
//     } else {
//       res.send(products);
//     }
//   });
// });

// app.post("/cart", (req, res) => {
//   fs.readFile("usears.json", (err, data) => {
//     const products = JSON.parse(data);
//     const number = req.body.number;
//     const title = req.body.title;
//     const image = req.body.image;
//     const price = req.body.price;
//     const days= req.body.days;
//    products.push({
//       id: products.length + 1,
//       number:+number,
//       days: days,
//       title: title,
//       image: image,
//       quantity: quantity,
//       price: price

//     });
    // fs.writeFile(products.json, JSON.stringify(products), (err) => {
    //   //console.log(err);
    //   res.send("YOU SUCCEED!!!");
    // });
//   });
// });


// app.delete("/cart/:id", (req, res) => {
//   fs.readFile("products.json", (err, data) => {
//     const products = JSON.parse(data);
//     const poductId = +req.params.id;
//     const poductsIndex = poducts.findIndex((product) => product.id === productId);
//     products.splice( poductsIndex, 1);
//     fs.writeFile("usears.json", JSON.stringify(poducts), (err) => {
//       res.send("YOU SUCCEED!!!");
//     });
//   });
// });
  // app.listen(5000, () => {
  //   console.log("Example app listening on port 5000!");
  // });