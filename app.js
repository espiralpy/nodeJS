//add controllers
var todoController = require('./controllers/todoController');
//show datas in view
var express = require('express');
var app = express();
//for Post
var bodyParser = require('body-parser');
//use engine EJS
app.set('view engine', 'ejs');
//static files like middleware
app.use('/assets', express.static('public/assets'));
app.use('/js', express.static('js'));
//fire controllers
todoController(app);

//listen port
app.listen(4001);
console.log('You are listening to port 4001');
