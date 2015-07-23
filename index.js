var express = require('express');
var app = express(); //creating our app

app.use(express.static('app')); /* Need to serve up the 'app' folder (directory) 
as static assets and needs to be rendered as the specified type */

app.get('*', function (req, res) { // * means any get requests
    res.sendFile(__dirname + '/app/index.html');
});

app.listen(process.env.PORT || 5000);
//listen for first variable (if false or not there), then use 5000


//To start: npm install
// : node index.js
// go to local host 5000