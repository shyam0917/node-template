const path = require('path');
const express = require('express');
const router = express.Router();
const products = [];

router.get("/add-product", (req, res, next) => {
    res.render('add-product.pug', {
        pageTitle: 'Add Product',
        path: '/admin/add-product',
        formsCSS: true,
        productCSS: true,
        activeAddProduct: true
    })
    // res.sendFile(path.join(__dirname, '../', 'views/add-product.html'));
    // res.send('<form action ="/admin/add-product" method ="POST"><input type ="text" name="title"/><button type="submit">Submit</button></form>')
})

router.post('/add-product', (req, res) => {
    products.push({
        title: req.body.title
    });
    //  console.log(req.body);
    res.redirect('/');
})

// module.exports = router;
exports.routes = router;
exports.products = products;