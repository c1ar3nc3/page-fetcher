const request = require('request');
const fs = require('fs');

const input = process.argv.slice(2);

request(input[0], (err, web, save) => {
  fs.writeFile(input[1], save, err => {
    if (err) {
      return console.log(error);
    }
    fs.stat(input[1], function (err, results) {
      console.log('Downloaded and saved ', results.size, ' bytes to ',input[1]);
    })
  });
});