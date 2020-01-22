const http = require('http');
const path = require('path');
const bodyparser = require('body-parser');


const express = require('express');

const app = express();
app.set('view engine', 'ejs');
//app.set('view engine', 'pug');
app.set('views', 'views');
app.use(bodyparser.urlencoded({
  extended: false
}));

app.use(express.static(path.join(__dirname, 'public')));

const adminData = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use("/admin", adminData.routes);
app.use(shopRoutes);

app.use((req, res, next) => {
  res.status(400).render('404', {
    pageTitle: "Page Not Found"
  })
  // res.status(400).sendFile(path.join(__dirname, 'views', '404.html'));
})
app.listen(8000);