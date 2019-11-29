const express = require('express');
const socketIO = require('socket.io');
const path = require('path');

const PORT = process.env.PORT || 3000;
const INDEX = path.join(__dirname, 'index.html');

const server = express()
  .use((req, res) => res.sendFile(INDEX) )
  .listen(PORT, () => console.log(`Listening on ${ PORT }`));

const io = socketIO(server);

var messages = [{
    id: 1,
    nickname: 'Nel',
    text: 'Bienvenido al chat'
    
}];

io.on('connection', (socket) => {
  console.log('Client connected');
  socket.on('disconnect', () => console.log('Client disconnected'));
  socket.emit('messages', messages);
  socket.on('add-message', function(data){
    messages.push(data);
    io.sockets.emit('messages',messages);
    });

});

setInterval(() => io.emit('time', new Date().toTimeString()), 1000);

/*
app.get('/', function(req,res){
    res.status(200).send('hola wapodesde ruta');
})*/

/*
io.on('connection', (socket) => {
    console.log('Client connected');
    socket.on('disconnect', () => console.log('Client disconnected'));
    
    socket.on('add-message', function(data){
        messages.push(data);
        io.sockets.emit('messages',messages);
    });
    socket.on('disconnect', function() {
        console.log('Got disconnect!');
    });
  });*/
  
  //setInterval(() => io.emit('time', new Date().toTimeString()), 1000);
  
/*
server.listen(PORT,function(){
    console.log('server working in localhost:6677');
});

io.on('', function(){
    console.log('byebye');
})*/