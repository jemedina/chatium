var express = require('express');
var bodyParser = require("body-parser");

var app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  res.setHeader('Content-Type', 'application/json');
  // Pass to next layer of middleware
  next();
});


console.log("initializing server");
app.get('/', function (req, res) {
  res.send('Hello World!');
});
app.post('/login', function (req, res) {
    var user_name=req.body.user;
    var password=req.body.password;
    var stat = 0;
    if(user_name == 'admin' && password == 'admin'){
      stat = 1;
    }
    console.log("User session started name = "+user_name+", password is "+password);
    res.send(JSON.stringify({ status: stat, error: null }));
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});