var express = require('express');
var app = express();

var lefties = ['Hillary Clinton', 'Bernie Sanders', 'Martin O\'Malley', 'Elizabeth Warren', 'Jill Stein', 'Lucy Florez', 'Winona LaDuke', 'Al Franken'];
var righties = ['Donald Drumpf', 'Ted Cruz', 'John Kasich', 'Jeb Bush', 'Carly Fiorina', 'Rick Santorum', 'Marco Rubio', 'Gary Johnson'];
var allCandidates = lefties.concat(righties);

function randomNumber(min, max) {
  return Math.floor(Math.random() * (1 + max - min) + min);
}

app.use(express.static('public'));

app.get('/lefties', function(request, response){
  response.send(lefties);
});

app.get('/righties', function(request, response){
  response.send(righties);
});

app.get('/randomIndex', function(request, response){
  var randomIndex = randomNumber(0, allCandidates.length-1);
  response.send(allCandidates[randomIndex]);
});



var server = app.listen(3000, function(){
  var port = server.address().port;
  console.log('Listening on port', port);
});
