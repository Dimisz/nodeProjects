const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

let items = [];

app.get('/', (req, res) => {
    var today = new Date();
    var options = {
        weekday: "long",
        day: "numeric",
        month: "long"
    };

    const day = today.toLocaleDateString("en-US", options);

    
    res.render('list', {kindOfDay: day, items: items});
});

app.post('/', (req, res) => {
    const item = req.body.todo;
    items.push(item);
    res.redirect('/');
})



app.listen(3000, () => {console.log('server running on port 3000...')});