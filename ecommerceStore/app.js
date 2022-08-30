const express = require('express');
const bodyParser = require('body-parser');

// importing my routes 
const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.use(adminRoutes);
app.use(shopRoutes);


app.listen(3000);
