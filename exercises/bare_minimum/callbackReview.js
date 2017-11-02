/**
 * Implement these functions following the node style callback pattern
 */

var fs = require('fs');
var https = require('https');
var request = require('request');

// This function should retrieve the first line of the file at `filePath`
var pluckFirstLineFromFile = function (filePath, callback) {
  fs.readFile(filePath, (err, data) => {
    if (err) { 
      callback(err, null); 
    } else { 
      callback(null, data.toString().split('\n')[0]); 
    }
  });
};

// This function should retrieve the status code of a GET request to `url`
var getStatusCode = function (url, callback) {
  // https.get(url, res => {
  // //   res.on('data', data => callback(null, res.statusCode));
  // // }).on('error', err => callback(err));
  //   res.on('data', callback(null, res.statusCode));
  // }).on('error', callback(err));
 
  var req = https.request(url, (res) => {
    console.log('statusCode:', res.statusCode);
    callback(null, res.statusCode);
    console.log('headers:', res.headers);
  });
  req.on('error', (e) => {
    console.log('message err: ', e.message);
    callback(e, null);
  });
  req.end();


 
};

// Export these functions so we can test them and reuse them in later exercises
module.exports = {
  getStatusCode: getStatusCode,
  pluckFirstLineFromFile: pluckFirstLineFromFile
};
