var express = require('express');
var bodyParser = require("body-parser");
var session = require('express-session');
var MemoryStore = require('memorystore')(session)
var cookieParser = require('cookie-parser');
var ObjectID = require('mongodb').ObjectID;

const MongoClient = require('mongodb').MongoClient;

const config = {
  secret: 'helloworld'
}
var session_store = new MemoryStore({
  checkPeriod: 86400000
});
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
app.use(cookieParser());
app.use(session({
  secret: config.secret,
  saveUninitialized: true,
  resave: true,
  store: session_store
}));
app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  res.setHeader('Content-Type', 'application/json');
  res.header("Access-Control-Allow-Credentials", true);
  next();
});

server = app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

const io = require('socket.io')


app.post('/login', function (req, res) {
  var email = req.body.email;
  var password = req.body.password;
  var stat = 0;

  /*
  db.collection('users').findOne({ _id: new ObjectID(_id) }, function (err, result) {
    if (err) throw err;
    callback(result);
  });
  */

  db.collection('users').findOne({email: email, password: password }, function( err, response){
    if(err) throw err;
    if (response){
      user_id = response._id
      console.log(user_id)
      //stat=1;
      //db.collection('users').update({})
    }
  })

  if (email == 'admin' && password == 'admin') {
    stat = 1;
  }
  console.log("User session started name = " + email + ", password is " + password);
  res.send(JSON.stringify({ status: stat, error: null }));
});

app.post('/regist', function (req, res) {
  console.log(req.body);
  var newUser = req.body;
  newUser.state = 'ONLINE';
  newUser.setup = false;
  db.collection('users').insertOne(newUser, function (error, response) {
    if (error) {
      console.log('Error occurred while inserting', error);
      res.end(JSON.stringify({
        status: 0,
        error: 'Service unavailable',
        userid: null
      }));
      // return 
    } else {
      req.session.userid = response.ops[0]._id;
      // return 
      res.end(JSON.stringify({
        status: 1,
        error: null,
        userid: response.ops[0]._id
      }));
    }
  });
});

app.get('/getUserInfo', function (req, res) {
  var connect_sid = cookieParser.signedCookie(req.cookies['connect.sid'], config.secret);
  if (connect_sid) {
    session_store.get(connect_sid, function (error, session) {
      if (session && session.userid) {
        getUserInfoByObjectID(session.userid, function(result){
          res.end(JSON.stringify(result));
        });
      }
      else
        res.end(JSON.stringify({
          state: 'OFFLINE'
        }));
    });
  } else {
    res.end(JSON.stringify({
      state: 'OFFLINE'
    }));
  }
});



app.post('/setupLanguages', function (req, res) {
  var connect_sid = cookieParser.signedCookie(req.cookies['connect.sid'], config.secret);
  if (connect_sid) {
    session_store.get(connect_sid, function (error, session) {
      if (session && session.userid) {
        var newvalues = { $set: {languageConfiguration: req.body, setup: true } };
        db.collection('users').updateOne({ _id: new ObjectID(session.userid) }, newvalues, function(err, requeryResponse) {
          if (err) throw err;
          res.end(JSON.stringify({
            status: 1,
            error: null
          }));
        });
      }
      else {
        res.end(JSON.stringify({
          status: 0,
          error: "Session has not been started"
        }));
      }
    });
  } else {
    res.end(JSON.stringify({
      status: 0,
      error: "Session has not been started"
    }));
  }
});


function getUserInfoByObjectID(_id, callback) {
  db.collection('users').findOne({ _id: new ObjectID(_id) }, function (err, result) {
    if (err) throw err;
    callback(result);
  });
}

