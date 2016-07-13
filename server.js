var express = require('express');
var app = express();
var port = 3000;


var middleware = require('./middleware');

// using middleware
//app.use(middleware.requireAuthentication);
app.use(middleware.logger);

app.get('/about', middleware.requireAuthentication, function(req, res) {
  res.send('About Us');
});

//exposing public folder
app.use(express.static(__dirname + '/public'));

app.listen(port, function() {
  console.log('Express server started @port ' + port + '!');
});
