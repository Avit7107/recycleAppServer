// const mongoose = require('mongoose');
// const prduct = require('./modules/product');
// const express = require("express");

// module.exports = {
//     getAllProducts: (req, res) => {
//         prduct.find().then((product) => {
//             res.status(200).json({
//                 product
//             })
//         }).catch(error => {
//             res.status(500).json({
//                 error
//             })
//         });
//     },
//     createProduct: (req, res) => {
//         const { title, description,quantity,price} = req.body;

//         const product = new Produt({
//             _id: new mongoose.Types.ObjectId(),
//             title,
//             image,
//             description,
//             quantity,
//             price,
//             condition
//         });

//         prduct.save().then(() => {
//             res.status(200).json({
//                 message: 'new product'
//             })
//         }).catch(error => {
//             res.status(500).json({
//                 error
//             })
//         });
//     },
    
//     getprduct: (req, res) => {
//         const productId = req.params.productId;

//         Product.findById(productId).then((product) => {
//             res.status(200).json({
//                 product
//             })
//         }).catch(error => {
//             res.status(500).json({
//                 error
//             })
//         });
//     },
//     updateProduct: (req, res) => {
//         const productId = req.params.productId
//         Product.update({_id: productId}, req.body).then(() => {
//             res.status(200).json({
//                 message: 'Product Updated'
//             })
//         }).catch(error => {
//             res.status(500).json({
//                 error
//             })
//         });
//     },
//     deleteProduct: (req, res) => {
//         const productId = req.params.productId

//         Product.remove({_id: productId}).then(() => {
//             res.status(200).json({
//                 message: `Product _id:${productId} Deleted`
//             })
//         }).catch(error => {
//             res.status(500).json({
//                 error
//             })
//         });
//     }
// }