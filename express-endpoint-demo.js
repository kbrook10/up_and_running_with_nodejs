var express = require('express');
var fs = require('fs');
var app = express();

//This creates an endpoint to display the response 'hello, this is the...' as a return to the user request from the browser...
app.use('/message', function(req,res){
    console.log('user requested endpoint');
    res.send('hello, this is the dawn of a new age...');
});

//This creates an endpoint to display the object that holds names in the data1.json file back to the browser for the user...
app.use('/users', function(req,res){
    fs.readFile('./data1.json', 'utf-8', function(err, data) {
        res.send(data);
    });
});

//This method suggests the server to listen in on port 3000 in the browser...
app.listen(3000);
