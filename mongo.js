// const { modules, connectDb } = require("./modules");
// const Product = require("./modules/product");
// const mongoose = require('mongoose');
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


// app.use((myLogger));
// app.use(bodyParser.json());
// app.use(express.json());
// app.use(cors());

  
//   const newProduct = new proudct({
//     _id: "",
//     title: "דיסק גדול",
//     image: "https://photos6.spartoo.eu/photos/764/7646428/7646428_500_A.jpg",
//     quantity: "3",
//     price: "70",
//     description:
//       "דיסק גדול ",
//       condition:true,

//   });
//   newProduct.save(function (err) {
//     if (err) return handleError(err);
//   });

// //   const newProductincart = new productincart({
// //     _id: "",
// //     title: "דיסק גדול",
// //     quantity: "3",
// //     price: "70",
// //     cart: proudct._id  ,
// //     description: "דיסק גדול ",
// //   });

// //   newProductincart.save(function (err) {
// //   if (err) return handleError(err);
// // });


// //   const newUser = new User({
// //     _id: "",
// //     userName:"elad",
// //     phonNamber: "050505050",
// //     conditionBefore: true,
// //     conditionReturn: false,
// //     dateOfrent: 05/09/2020,
// //     dateOfreturn: 07/09/2020,   
// //   });

// //   newUser.save(function  (err) {
// //     if (err) return handleError(err);
// //   });
// //  Porduct.findOne({ title: "דיסק גדול" })
// //   .populate('cart')
// //   .exec();

// // console.log('?חיפשת: ', proudct.cart.name);

// //  User.findOne({ conditionBefore: true })
// // .populate('product')
// // .exec();


// // console.log('?מצב הכלי לפני ההשכרה: ', proudct.user.conditionBefore);
// const mongoose = require("mongoose");
// const Schema = require("mongoose");

  

// connectDb().then(async () => {
//     app.listen(5000, () => {
//       console.log(`Example app listening on port 5000!`);
//     });
// })
