
var socket = io();
$('button').click(function(){
  socket.emit('create-game', 'poop');
  return false;
});
socket.on('chat message', function(msg){
  $('#messages').append($('<li>').text(msg));
});
