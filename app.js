// Making a working server
const express = require('express');
const app = express();
const PORT = process.env.PORT || 1377;
const rounds = require('./rounds');
var server = require('http').Server(app);
app.get('/', (req, res) => res.sendFile(__dirname + '/client/index.html'));
app.use('/client', express.static(__dirname + '/client'));
server.listen(PORT);
console.log('Server started on port ' + PORT);

var users = []
var isWinner = false;
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
    userMap[userName] = {
      "username": data.username,
      score: 0,
    }
    console.log(userMap[userName])
    socket.emit('playerObject', userMap[userName])
    socket.emit('start Game', rounds.current_Round)
    socket.on('guess', data => {
      console.log(rounds.round.length)
      if (rounds.round.length == 1) {
        if (data.playerGuess.toLowerCase() === rounds.current_Round.answer.toLowerCase()) {
          userMap[data.User].score += 1
          socket.emit('score', userMap[data.User])
        }
        // Object.keys(SOCKET_LIST).forEach(s => SOCKET_LIST[s].emit('endgame', getWinner(userMap)))
      } else if (data.playerGuess.toLowerCase() === rounds.current_Round.answer.toLowerCase()) {
        userMap[data.User].score += 1
        socket.emit('score', userMap[data.User])

        cr = rounds.current_Round
        for(var i = 0; i < rounds.round.length; i++){
          if(rounds.round[i] == cr){
            rounds.round.splice(i,1)
          }
        }
        var random = getRandomInt(rounds.round.length)
        rounds.current_Round = rounds.round[random];
        Object.keys(SOCKET_LIST).forEach(s => SOCKET_LIST[s].emit('change Round', rounds.current_Round))
      } else {
        userMap[data.User].score -= 1
        socket.emit('score', userMap[data.User])
      }
      getWinner(userMap)
      if (isWinner) {
        Object.keys(SOCKET_LIST).forEach(s => SOCKET_LIST[s].emit('endgame', getWinner(userMap)))
        userMap = {}
        isWinner = false
      }
    })
  })

  function getWinner(userMap) {
    var users_ = [];
    var scores = [];
    for (var user of Object.keys(userMap)) {
      users_.push(user);
      scores.push(userMap[user]["score"]);
    }
    var maxScore = scores[0];
    var maxScoreIndex = 0
    if(rounds.round.length == 2){
      isWinner = true
      rounds.round = rounds.reset_rounds
    }
    for (var index in scores) {
      if (scores[index] == 10) {
        maxScore = scores[index];
        maxScoreIndex = index
        isWinner = true;
      }
      else if(scores[index] > maxScore){
        maxScore = scores[index];
        maxScoreIndex = index
      }
    }
    return {
      user_: users_[maxScoreIndex],
      score_: maxScore
    }
  }
})

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}
// ROUND 35
// ROUND 41