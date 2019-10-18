//Imports User Model
const userModel = require('../models/users');

//Fs reads a file to later write it to user
const fs = require('fs');

module.exports = {

//Creates a new user, user send a post request with username, password and email 
//and the method calls DB using User model
 create: function(req, res, next) {
   console.log(req.body)
      userModel.create({ email: req.body.email, password: req.body.password }, function (err, result) {
      if (err){ 
         console.log("Error creating user : "+err)
         return res.json({status:"failed"})
         }else
         
         return res.json({status:"success"})
      });
 },

//Authenticates user
authenticate: function(req, res, next){
console.log(req.body)
      userModel.findOne({email:req.body.email}, function(err,result){
         if (err){ 
            console.log("Error creating user : "+err)
            return res.json({status:"failed"})
            }else
            console.log(result)
            return res.json({status:"success"})
      })
},

//Deletes the cookie created for the user
//and redirects him to login URI
 logout: function(req, res, next) {
    res.json({status:"success"})
  },

//If user logged previously : redirects to UserPage
//If user has not log in the system, loads registration page.
   loadRegister: function(req, res, next) {
       fs.readFile('./app/views/register.html',function (err, data){
        res.writeHead(200, {'Content-Type': 'text/html','Content-Length':data.length});
        res.write(data);
        res.end();
        })
  },

//If user logged previously : redirects to UserPage
//If user has not log in the system, loads authentication page.
   loadAuthenticate: function(req, res, next) {
        fs.readFile('./app/views/login.html',function (err, data){
        res.writeHead(200, {'Content-Type': 'text/html','Content-Length':data.length});
        res.write(data);
        res.end();
        })
    
      },

//If user logged previously : loads UserPage
//If user has not log in the system, loads authentication page.
   loadUserPage: function(req, res, next) {
         fs.readFile('./app/views/index.html',function (err, data){
            res.writeHead(200, {'Content-Type': 'text/html','Content-Length':data.length});
            res.write(data);
            res.end();
            })
      },

   //If user logged previously : loads UserPage
//If user has not log in the system, loads authentication page.
   loadStreamingPage: function(req, res, next) {
         fs.readFile('./app/views/streaming.html',function (err, data){
            res.writeHead(200, {'Content-Type': 'text/html','Content-Length':data.length});
            res.write(data);
            res.end();
            })
      },

         //If user logged previously : loads UserPage
//If user has not log in the system, loads authentication page.
   loadPredicctionAccidentPage: function(req, res, next) {
      fs.readFile('./app/views/accidentPre.html',function (err, data){
         res.writeHead(200, {'Content-Type': 'text/html','Content-Length':data.length});
         res.write(data);
         res.end();
         })
   },

   //If user has not log in the system, loads authentication page.
   loadEnvironmentPage: function(req, res, next) {
      fs.readFile('./app/views/environment.html',function (err, data){
         res.writeHead(200, {'Content-Type': 'text/html','Content-Length':data.length});
         res.write(data);
         res.end();
         })
   },

      //If user has not log in the system, loads authentication page.
      loadHistoryPage: function(req, res, next) {
         fs.readFile('./app/views/history.html',function (err, data){
            res.writeHead(200, {'Content-Type': 'text/html','Content-Length':data.length});
            res.write(data);
            res.end();
            })
      }
}

