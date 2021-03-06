var express = require('express');
var bodyParser = require("body-parser");
var session = require('express-session');
var MemoryStore = require('memorystore')(session)
var cookieParser = require('cookie-parser');
var ObjectID = require('mongodb').ObjectID;
var path = require('path');


const MongoClient = require('mongodb').MongoClient;

const config = {
  secret: 'helloworld'
}
var session_store = new MemoryStore({
  checkPeriod: 86400000
});
var mongodb_url;
if(!process.env.DBUSER || !process.env.PASS) {
  mongodb_url = "mongodb://localhost:27017/";
} else {
  mongodb_url = 'mongodb://'+process.env.DBUSER+':'+process.env.PASS+'@ds123981.mlab.com:23981/chatium'
}

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
app.use(express.static(path.join(__dirname, 'dist/chatium')));
app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  res.setHeader('Content-Type', 'application/json');
  res.header("Access-Control-Allow-Credentials", true);
  next();
});
const PORT = process.env.PORT || 3000;
server = app.listen(PORT, function () {
  console.log('Chatium app listening on port ' + PORT);
});
var io = require('socket.io')(server);


app.post('/login', function (req, res) {
  var email = req.body.email;
  var password = req.body.password;
  var stat = 0;
  db.collection('users').findOne({ email: email, password: password }, function (err, response) {
    if (err) throw err;
    if (response) {
      res.cookie('userid', response._id.toString());
      res.cookie('username', response.name.toString());
      user_id = response._id;
      req.session.userid = user_id;
      stat = 1;
      db.collection('users').updateOne({ _id: user_id }, { $set: { state: "ONLINE" } });
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
        if (session && session.userid)
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
      res.cookie('userid', response.ops[0]._id.toString());
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

app.post('/getRoomById', function (req, res) {
  db.collection('rooms').findOne({ _id: new ObjectID(req.body.id) }, function (err, result) {
    if (err) throw err;
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

app.post('/getRoomsByLanguage', function (req, res) {
  var roomParams = req.body;
  db.collection('rooms').find({
    langCode: roomParams.langCode
  }).toArray(function (err, results) {
    if (err) throw err;
    res.end(JSON.stringify(results));
  });
});


app.post('/joinRoom', function (req, res) {
  var userRoomParams = req.body;
  db.collection('users').updateOne({ _id: new ObjectID(userRoomParams.userid) },
    {
      $push: {
        chats: {
          chatid: userRoomParams.roomid,
          type: 'room'
        }
      }
    });

  db.collection('rooms').updateOne({ _id: new ObjectID(userRoomParams.roomid) },
    {
      $push: {
        members: userRoomParams.userid
      }
    });

  res.end(JSON.stringify({
    status: 0,
    error: "Session has not been started"
  }));

});


app.post('/createRoom', function (req, res) {
  var roomDetails = req.body;

});


function getUserInfoByObjectID(_id, callback) {
  db.collection('users').findOne({ _id: new ObjectID(_id) }, function (err, result) {
    if (err) throw err;
    callback(result);
  });
}

/****************** CHAT LOGIC ***********************/
const ACK = 1;
var onlineUsers = {};
io.on('connection', function (socket) {



  socket.on('disconnect', function () {
    if (socket && socket.chatinfo && socket.chatinfo.ops && socket.chatinfo.ops.emisor)
      delete onlineUsers[socket.chatinfo.ops.emisor];
    console.log("Online users: " + Object.keys(onlineUsers).length);
  });


  socket.on('chat started', function (chatinfo) {
    socket.emit('chat created', 'ola');
    socket.alreadyConnected = true;
    if (chatinfo && chatinfo.ops && chatinfo.ops.emisor && chatinfo.type == 'user') {
      socket.chatinfo = chatinfo;
      if (!(chatinfo.ops.emisor in onlineUsers))
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
                    receptor: chatinfo.ops.receptor,
                    type: 'single'
                  }
                }
              }, _ => {
                //Notify to emisor that chat has been created
                socket.emit('new chat created', ACK);
                //Load previous chats
                socket.emit('previous messages', {
                  messages: []
                });
              });
            db.collection('users').updateOne({ _id: new ObjectID(socket.chatinfo.ops.receptor) },
              {
                $push: {
                  chats: {
                    chatid: chat_id,
                    receptor: chatinfo.ops.emisor,
                    type: 'single'
                  }
                }
              }, _ => {
                //Notify to receptor that chat has been created
                if (socket.chatinfo.ops.receptor in onlineUsers) {
                  console.log("Notifying ACK to ", socket.chatinfo.ops.receptor);
                  onlineUsers[socket.chatinfo.ops.receptor].socket.emit('new chat created', ACK);
                }
              });
          });
        } else {
          socket.chatid = user.chats[i].chatid;
          db.collection('chats').findOne({ _id: socket.chatid }, function (err, chat) {
            socket.emit('previous messages', chat);
          });
        }
      });

    } else if (chatinfo && chatinfo.ops && chatinfo.type == 'room') {
      //USER WANTS TO LOAD A ROOM
      socket.chatid = chatinfo.ops.chatid;
      socket.chatinfo = chatinfo;
      db.collection('chats').findOne({ _id: new ObjectID(socket.chatid) }, function (err, chatRes) {
        socket.emit('previous messages', chatRes);
      });
    }
  });

  socket.on('create room', function (roomDetails, user_id) {
    db.collection('chats').insertOne({ messages: [] }, function (error, insertedChat) {
      roomDetails.chatid = insertedChat.ops[0]._id;
      db.collection('rooms').insertOne(roomDetails, (error, roomResult) => {
        if (error) throw error;
        //PUSH CHAT TO USER CHATS
        db.collection('users').updateOne({ _id: new ObjectID(user_id) },
          {
            $push: {
              chats: {
                chatid: roomResult.ops[0]._id,
                type: 'room'
              }
            }
          }, () => {
            socket.emit('new chat created', ACK);
            socket.emit('my new room', roomResult.ops[0]);
          });
      });
    });
  });

  socket.on('send message', function (recMessage) {
    console.log('send message event', recMessage);
    if (socket.chatinfo && socket.chatinfo.ops
      && socket.chatinfo.ops.emisor) {
      var receivedMessage = {
        text: recMessage,
        emisor: socket.chatinfo.ops.emisor,
        date: new Date().getTime()
      };
      if (socket.chatinfo.type == 'room') {
        receivedMessage['emisorName'] = socket.chatinfo.ops.emisorName;
      }
      db.collection('chats').updateOne({ _id: new ObjectID(socket.chatid) }, {
        $push: {
          messages: receivedMessage
        }
      });
      if (socket.chatinfo.type == 'user') {
        console.log('members online', Object.keys(onlineUsers));
        if (socket.chatinfo.ops.receptor in onlineUsers) {
          onlineUsers[socket.chatinfo.ops.receptor].socket.emit('message received', receivedMessage);
        }
      } else { //Chat room
        if (socket.chatinfo &&
          socket.chatinfo.ops &&
          socket.chatinfo.ops.roomid) {
          db.collection('rooms').findOne({ _id: new ObjectID(socket.chatinfo.ops.roomid) }, (err, roomResult) => {
            if (roomResult.members) {
              roomResult.members.forEach(member => {
                if (member in onlineUsers && member != socket.chatinfo.ops.emisor && onlineUsers[member].socket.chatid == socket.chatid) {
                  onlineUsers[member].socket.emit('message received', receivedMessage);
                }
              });
            }
          });
        }
      }
    }
  });


  socket.on('start connection', function (currentUser) {
    if (!(currentUser._id in onlineUsers))
      onlineUsers[currentUser._id] = {
        socket: socket
      };

    console.log('onlineUsers', Object.keys(onlineUsers));
  });
});