// Making a working server
const express = require('express');
const app = express();
const PORT = process.env.PORT || 1577;
const rounds = require('./rounds');
var server = require('http').Server(app);
app.get('/', (req, res) => res.sendFile(__dirname + '/client/index.html'));
app.use('/client', express.static(__dirname + '/client'));
server.listen(PORT);
console.log('Server started on port ' + PORT);

var users = []
var userMap = {}

var SOCKET_LIST = {}
// Websocket
var io = require('socket.io')(server, {});
io.sockets.on('connection', socket => {
  SOCKET_LIST[socket.id] = socket
  console.log('Socket connection');
  socket.on('Enteruser', data => {

    var userName = data.username
    users.push(data.username)
    if (userMap[userName] = {}) {
      userMap[userName] = {
        "username": data.username,
        score: 0,
      }
    }
    socket.emit('playerObject', userMap[userName])
    socket.emit('start Game', rounds.current_Round)
    socket.on('guess', data => {
      console.log(data.playerGuess)
      console.log(rounds.round.length)
      if (rounds.round.length == 1) {
        console.log(getWinner(userMap))
        Object.keys(SOCKET_LIST).forEach(s => SOCKET_LIST[s].emit('endgame', getWinner(userMap)))
      } else if (data.playerGuess.toLowerCase() === rounds.current_Round.answer.toLowerCase()) {
        userMap[data.User].score += 1
        socket.emit('score', userMap[data.User])
        rounds.round.shift();
        rounds.current_Round = rounds.round[0];

        Object.keys(SOCKET_LIST).forEach(s => SOCKET_LIST[s].emit('change Round', rounds.current_Round))
      } else {
        userMap[data.User].score -= 1
        socket.emit('score', userMap[data.User])
      }
    })
  })

  function getWinner(userMap) {
    var users_= [];
    var scores = [];
    for (var user of Object.keys(userMap)) {
      users_.push(user);
      scores.push(userMap[user]["score"]);
    }
    var maxScore = scores[0];
    var maxScoreIndex = 0
    for (var index in scores) {
      if (scores[index] > maxScore) {
        maxScore = scores[index];
        maxScoreIndex = index
      }
    }
    return {
      user_ : users_[maxScoreIndex],
      score_ : maxScore
    }
  }
})