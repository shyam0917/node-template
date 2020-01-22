const path = require('path');
const express = require('express');
const rootDir = require('../utils/path');
const router = express.Router();
const adminData = require('./admin');

router.get("/", (req, res, next) => {
    const products = adminData.products;
    res.render('shop', {
        pageTitle: "Shop",
        prods: products,
        path: '/',
        hasProducts: products.length > 0,
        activeShop: true,
        productCSS: true
    });
    // res.sendFile(path.join(rootDir, 'views/shop.html'));
})

module.exports = router;