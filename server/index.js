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
var io = require('socket.io')(server);


app.post('/login', function (req, res) {
  var email = req.body.email;
  var password = req.body.password;
  var stat = 0;
  db.collection('users').findOne({ email: email, password: password }, function (err, response) {
    if (err) throw err;
    if (response) {
      user_id = response._id;
      req.session.userid = user_id;
      stat = 1;
      db.collection('users').updateOne({ _id: user_id }, { $set: { state: "ONLINE" } })
      //console.log("Busqueda correcta y campos actualizados, status=", stat);
      res.end(JSON.stringify({ status: stat, error: null }));
    } else {
      res.end(JSON.stringify({
        status: 0,
        error: "Session has not been started"
      }));
    }
  })

});

app.get('/singOut', function (req, res) {
  var connect_sid = cookieParser.signedCookie(req.cookies['connect.sid'], config.secret);
  if (connect_sid) {
    session_store.get(connect_sid, function (error, session) {
      req.session.destroy(function (err) {
        //console.log("ID USER: ", session.userid);
        db.collection('users').updateOne({ _id: new ObjectID(session.userid) }, { $set: { state: "OFFLINE" } });
        res.end(JSON.stringify({ state: 1, error: null }));
      })
    })
  }
});

app.post('/regist', function (req, res) {
  //console.log(req.body);
  var newUser = req.body;
  newUser.state = 'ONLINE';
  newUser.setup = false;
  newUser.chats = [];
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
        getUserInfoByObjectID(session.userid, function (result) {
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

app.post('/getUserInfoById', function (req, res) {
  getUserInfoByObjectID(req.body.id, function (result) {
    res.end(JSON.stringify(result));
  });
});



app.post('/setupLanguages', function (req, res) {
  var connect_sid = cookieParser.signedCookie(req.cookies['connect.sid'], config.secret);
  if (connect_sid) {
    session_store.get(connect_sid, function (error, session) {
      if (session && session.userid) {
        var newvalues = { $set: { languageConfiguration: req.body, setup: true } };
        db.collection('users').updateOne({ _id: new ObjectID(session.userid) }, newvalues, function (err, requeryResponse) {
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

app.post('/searchConnections', function (req, res) {
  var searchParams = req.body;
  var connect_sid = cookieParser.signedCookie(req.cookies['connect.sid'], config.secret);
  if (connect_sid) {
    session_store.get(connect_sid, function (error, session) {
      db.collection('users').find({
        gender: searchParams.gender,
        "languageConfiguration.nativeLanguage": searchParams.nativeLanguage,
        "languageConfiguration.learningLanguage": searchParams.learningLanguage,
        "_id": {
          $ne: new ObjectID(session.userid)
        }
      }).toArray(function (err, results) {
        if (err) throw err;
        res.end(JSON.stringify(results));
      });
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

/****************** CHAT LOGIC ***********************/

var onlineUsers = {};
io.on('connection', function (socket) {

  console.log("New connection");



  socket.on('disconnect', function () {
    console.log("User disconnected :(");
    if (socket && socket.chatinfo && socket.chatinfo.ops && socket.chatinfo.ops.emisor)
      delete onlineUsers[socket.chatinfo.ops.emisor];
  });


  socket.on('chat started', function (chatinfo) {
    console.log('chat started', chatinfo);
    socket.alreadyConnected = true;
    if (chatinfo && chatinfo.ops && chatinfo.ops.emisor) {
      socket.chatinfo = chatinfo;
      onlineUsers[chatinfo.ops.emisor] = {
        socket: socket
      };
      db.collection('users').findOne({ _id: new ObjectID(socket.chatinfo.ops.emisor) }, function (err, user) {
        let i = user.chats.findIndex(chat => chat.receptor == chatinfo.ops.receptor);
        //If chat between emisor and receptor not exists, create it
        if (i < 0) {
          db.collection('chats').insertOne({ messages: [] }, function (error, response) {
            if (error) throw error;
            //Generated chatid
            chat_id = response.ops[0]._id;
            socket.chatid = chat_id;

            db.collection('users').updateOne({ _id: new ObjectID(socket.chatinfo.ops.emisor) },
              {
                $push: {
                  chats: {
                    chatid: chat_id,
                    receptor: chatinfo.ops.receptor
                  }
                }
              });
            db.collection('users').updateOne({ _id: new ObjectID(socket.chatinfo.ops.receptor) },
              {
                $push: {
                  chats: {
                    chatid: chat_id,
                    receptor: chatinfo.ops.emisor
                  }
                }
              });
          });
          socket.emit('previous messages', []);
        } else {
          socket.chatid = user.chats[i].chatid;
          db.collection('chats').findOne({_id: socket.chatid}, function(err, chat){
            socket.emit('previous messages', chat);
          })
          
        }
      });

    }

  });

  socket.on('send message', function (recMessage) {
    var receivedMessage = {
      text: recMessage,
      emisor: socket.chatinfo.ops.emisor,
      date: new Date().getTime()
    };
    db.collection('chats').updateOne({ _id: socket.chatid }, {
      $push: {
        messages: receivedMessage
      }
    });
    if (socket.chatinfo.ops.receptor in onlineUsers)
      onlineUsers[socket.chatinfo.ops.receptor].socket.emit('message received', receivedMessage);
  });
});