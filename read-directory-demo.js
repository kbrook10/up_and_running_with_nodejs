var fs = require('fs');

fs.readdir('Volumes:/', function(err, data) {
    console.log(data);
});
