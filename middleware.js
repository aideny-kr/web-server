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

module.exports = middleware;
