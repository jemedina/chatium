var express = require('express');
var bodyParser = require("body-parser");
var session = require('express-session');

const MongoClient = require('mongodb').MongoClient;

const mongodb_url = 'mongodb://localhost:27017';

const dbName = 'chatium';

var db;

MongoClient.connect(mongodb_url, { useNewUrlParser: true }, function (err, client) {
  if (null == err) {
    console.log("Connected successfully to mongo server");
  }
  db = client.db(dbName);
});

var app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(session({
  secret: "holamundo"
}));
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
  var email = req.body.email;
  var password = req.body.password;
  var stat = 0;
  if (email == 'admin' && password == 'admin') {
    stat = 1;
  }
  console.log("User session started name = " + email + ", password is " + password);
  res.send(JSON.stringify({ status: stat, error: null }));
});

app.post('/regist', function (req, res) {
  console.log(req.body);
  db.collection('users').insertOne(req.body, function (error, response) {
    if (error) {
      console.log('Error occurred while inserting', error);
      res.end(JSON.stringify({
        status: 0,
        error: 'Service unavailable',
        userid: null
      }));
      // return 
    } else {
      console.log('inserted record', response.ops[0]);
      req.session.userid = response.ops[0]._id;
      req.session.status = 'setup';
      // return 
      res.end(JSON.stringify({
        status: 1,
        error: null,
        userid: response.ops[0]._id
      }));
    }
  });
});

app.get('/getUserInfo', function(req, res) {
  console.log(req.session);
  if(req.session.userid) {
    res.end(JSON.stringify({
      status: 'EXPLICIT'
    }));
  } else {
    res.end(JSON.stringify({
      status: 'ANONYMOUS'
    }));
  }

});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});