var express = require('express');
var app = express();
var port = 3000;

// building middleware
var middleware = {
  // middleware requireAuthentication
  requireAuthentication: function(req, res, next) {
    console.log('private route hit!');
    next();
  },
  // middleware logger
  logger: function(req, res, next) {
    console.log('request:' + ' ' + new Date().toString() + ' ' + req.method
    + ' ' + req.originalUrl );
    next();
  }
}

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
