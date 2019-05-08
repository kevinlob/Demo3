var username = ""
var socket = io();

socket.on('serverMsg', data => {
  console.log(data.msg);
})
document.getElementById('enterUser').onclick = () => {
  username = document.getElementById('username').value
  socket.emit('Enteruser', {
    username: document.getElementById('username').value
  })
}
socket.on('playerObject', data => {
  console.log(data.score);
});
document.getElementById('enterGuess').onclick = () =>{
  var guess = document.getElementById('guess').value;
  document.getElementById('guess').value = "";
  socket.emit('guess', {
    playerGuess: guess,
    User: username
  });
}
socket.on('score', data =>{
  document.getElementById('playerScore').innerHTML = `Score: ${data.score}`;
})

socket.on('start Game', data =>{
  document.getElementById('transitionPage').style.display = "none";
  document.getElementById('gamePage').style.display = "block";
  document.getElementById('statsPage').style.display = "none";
  document.getElementById('Homepage').style.display = "none";
  document.getElementById('photo1').src = data.photo1
  document.getElementById('photo2').src = data.photo2
  document.getElementById('photo3').src = data.photo3
  document.getElementById('photo4').src = data.photo4
})
socket.on('change Round', data =>{
  document.getElementById('photo1').src = data.photo1
  document.getElementById('photo2').src = data.photo2
  document.getElementById('photo3').src = data.photo3
  document.getElementById('photo4').src = data.photo4
})

socket.on('endgame', obj =>{
  document.getElementById('gamePage').style.display = "none";
  console.log(obj.u, obj.s)
  document.getElementById('winner').innerHTML =  `<span class = "bold">${obj.user_}</span> Had the Highest Score with <span class = "bold">${obj.score_}</span>`
});