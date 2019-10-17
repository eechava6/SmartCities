//Imports
const express = require('express');
const bodyParser = require('body-parser');

//App imports
const users = require('./routes/users');
const config = require('./config/database'); //database configuration
const mongoose = require('mongoose');

//Creates the instance
const app = express();

//Connection to DB

const options = {
  autoIndex: false, // Don't build indexes
  reconnectTries: 30, // Retry up to 30 times
  reconnectInterval: 500, // Reconnect every 500ms
  poolSize: 10, // Maintain up to 10 socket connections
  // If not connected, return errors immediately rather than waiting for reconnect
  bufferMaxEntries: 0,
  useNewUrlParser: true,
  useUnifiedTopology: true
}

const connectWithRetry = () => {
console.log('MongoDB connection with retry')
mongoose.connect(config.db, options).then(()=>{
  console.log('MongoDB is connected')
}).catch(err=>{
  console.log('MongoDB connection unsuccessful, retry after 5 seconds.')
  setTimeout(connectWithRetry, 5000)
})
}

connectWithRetry()

//App middleware start
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

//Redirect all '/' request  to authentication.
app.get('/', function(req, res){  
  res.redirect('/users/authenticateUser')
});

//Statics (Styles and JS)
app.use(express.static(__dirname + '/public/'));

//Public routes
app.use('/users', users);

// Handle errors
app.use(function(err, req, res, next) {
  if(err.status === 404)
  	res.status(404).json({message: "Not found"});
  else
    if(err[0] && err[0].msg){
    res.status(500).json({message: "There was an error : " + err[0].msg});
    }
});

//Server listening at port 3000
app.listen(3000, function(){
	console.log('Node server listening on port 3000');
});
