const express = require('express');
const app = express();
const mongoose = require('mongoose');
const connect = require('./configis/db');
const productController = require('./controller/product.controller');

app.use(express.json());
app.use('/products', productController);
app.use(express.static('public'));
app.set('view engine','ejs');


app.listen('444' , async () => {
    await connect();
  console.log("We are listening 444");
})