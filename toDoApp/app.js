const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

let items = [];
let workItems = [];

const today = new Date();
var options = {
    weekday: "long",
    day: "numeric",
    month: "long"
};

const day = today.toLocaleDateString("en-US", options);

app.get('/', (req, res) => {
    res.render('list', {listTitle: day, items: items});
});

app.post('/', (req, res) => {
    const item = req.body.todo;
    console.log(req.body.list);
    if(req.body.list === "Work List"){
        workItems.push(item);
        res.redirect('/work');
    }
    else{
        items.push(item);
        res.redirect('/');
    }
});


app.get('/work', (req, res) => {
    res.render("list", {listTitle: "Work List", items: workItems})
});

app.get('/about', (req, res) => {
    res.render('about');
});



app.listen(3000, () => {console.log('server running on port 3000...')});