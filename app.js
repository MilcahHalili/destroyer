var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

var bodyParser = require('body-parser');
var path = require('path');
var destroyer = require('./destroyer.js');
var game = null;

var startingClient = null;
var joiningClient = null;

var clientData = {
  gameRunning: false,
  serverMessage: "",
  lastShot: {},
  resultOfLastShot: false,
  turn: 'p1'
};

app.set('view engine', 'ejs');
// app.use(ejsLayouts);

// this sets a static directory for the views
app.use(express.static(path.join(__dirname, 'static')));

// tell your app to use the module
app.use(bodyParser.urlencoded({ extended: false }));

// Routes
app.get('/', function(req, res){
  // res.sendFile(__dirname + '/index.html');
  res.render('main', {data: clientData});
});

io.on('connection', function(socket){
  console.log('a user connected: ' + socket.id);

  socket.on('take-shot', function(msg){
    console.log('received msg take-shot');
    // send out to all connected clients
    io.emit('chat message', msg)
  });

  socket.on('create-game', function(msg) {
    console.log('received msg create-game');
    game = destroyer();
  });

  socket.on('disconnect', function() {
    console.log('a user disconnected');
  });
});

http.listen(3000, function(){
  console.log('listening on port 3000');
});
