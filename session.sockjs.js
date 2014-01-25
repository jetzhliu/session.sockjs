var sockjs = require('sockjs'),
    oldCreateServer = sockjs.createServer;
sockjs.createServer = function(option){
  var o = option || {};
  var opts = {
    'sessionStore': o.sessionStore || require('connect').middleware.session.MemoryStore(), 
    'cookieParser': o.cookieParser || require('connect').middleware.session.cookieParser()
  };
  // TODO
  if (option == undefined) {
    return oldCreateServer.call(sockjs);
  } else {
    return oldCreateServer.call(sockjs, option);
  }
}
export = sockjs;