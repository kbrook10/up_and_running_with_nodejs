var fs = require('fs');

fs.readFile('./data1.json', 'utf-8', function(err, data) {
    if(err) {
        console.log('unable to read file');
    }
    else {
        try {
            data = JSON.parse(data);
            console.log(data);
        }
        catch(e) {
            console.error('invalid json in file')
        }
    }
});
