var fs = require('fs');

var tomString = '{ "name": "Tom" }';
// tomString = JSON.stingify(tomString);

fs.writeFile('tom.json', tomString);

var timmy = {
    name: 'Timmy'
}

fs.writeFile('timmy.json', JSON.stringify(timmy))
