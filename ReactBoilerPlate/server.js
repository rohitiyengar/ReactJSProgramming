var express = require('express'); //Load in module. In our case it is express
//Create the App
var app = express(); //Create new app. Passing express library as function
app.use(express.static('public')); //expose folder name to the server.

app.listen(3000, function() { //start the server. function() is called when server goes up.
  console.log('Express Server is up on port 3000')
});
