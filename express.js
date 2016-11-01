var express = require('express');
//body parser para POST
var bodyParser = require('body-parser');

var app = express();
// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })

//use engine EJS
app.set('view engine', 'ejs');
app.use('/assets', express.static('assets'));

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

//Receive QUERY STRINGS http://127.0.0.1:4001/contact?dept=rh&person=ariana
app.get('/contact', function(req, res){
  console.log(req.query);
  res.render('pages/contact', { qs: req.query });
});

app.post('/contact', urlencodedParser, function(req, res){
  console.log(req.body);
  res.render('pages/contact-success', { data: req.body });
});

//Rendering con EJS, y checar html para vistas parciales
app.get('/profile/:name', function(req, res) {
    var data = {age:29, job:'ninja', hobbies: ['eating', 'fishing']};
    res.render('pages/profile', {person : req.params.name, data : data});
});


app.listen(4001);
