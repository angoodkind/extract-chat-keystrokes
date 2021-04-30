const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const port = process.env.PORT || 3000;
const mongoose = require('mongoose');
const Msg = require('./models/messages');
const KS = require('./models/keystrokes');
const mongoDB = 'mongodb+srv://Adam-gk:dHX4HVxiQVqFcFTe@cluster0.oqwbc.mongodb.net/message-database?retryWrites=true&w=majority'
mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true }).then(()=>{
  console.log('connected to db');
}).catch(err => console.log(err));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket) => {
  socket.on('keystroke-down', ks => {
    keystroke = new KS({keystroke: ks});
    keystroke.save().then(()=>{
      io.emit('keystroke-down', ks);
    });
  })

  socket.on('chat message', msg => {
    const message = new Msg({msg});
    message.save().then(()=>{
      io.emit('chat message', msg);
    })    
  });
});

http.listen(port, () => {
  console.log(`Socket.IO server running at http://localhost:${port}/`);
});