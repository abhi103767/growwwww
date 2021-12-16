
const express = require('express');
const Product = require('../model/product.model');

const mongoose = require('mongoose');

const router = express.Router();


//get all products
router.get('/', async (req,res) => {
    const products = await Product.find({}).lean().exec();
    res.render('products/all.ejs', {
        products,
    });
});

//get single products by id

router.get('/:id', async(req,res) => {
    console.log(req.params.id);
    const product = await Product.findOne({_id : req.params.id}).lean().exec();
    console.log(product);
    res.render('products/product.ejs', {
        product,
    })
})

module.exports = router;
