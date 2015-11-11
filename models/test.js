'use strict';

var fs = require('fs');

fs.readFile('./todos.json', 'utf-8', function(err, data) {
  console.log( JSON.parse(data) );
})
