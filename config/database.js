//Set up mongoose connection and db config

var path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env =  process.env.NODE_ENV || 'dev';   

var config = {
  dev: {
    baseUrl: "/",
    root: rootPath,
    app: {
      name: 'SmartCities'
    },
    port: process.env.PORT || 3000,
    db:'mongodb+srv://globalUser:easypassword321@cluster0-fittf.mongodb.net/test?retryWrites=true&w=majority'
  }
};

module.exports = config[env];
