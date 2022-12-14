const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');


const rootDir = require('./util/path');
// importing my routes 
const adminData = require('./routes/admin');
const shopRoutes = require('./routes/shop');

const app = express();


app.set('view engine', 'ejs');
app.set('views', 'views');


app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname,'public')));

app.use('/admin', adminData.routes);
app.use(shopRoutes);

app.use((req, res, next) => {
    res.status(404).render('404', {pageTitle: "Page Not Page"});
});

app.listen(3000);
