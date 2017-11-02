/*
 * Write a function WITH NO CALLBACKS that,
 * (1) reads a GitHub username from a `readFilePath`
 *     (the username will be the first line of the file)
 * (2) then, sends a request to the GitHub API for the user's profile
 * (3) then, writes the JSON response of the API to `writeFilePath`
 *
 * HINT: We exported some similar promise-returning functions in previous exercises
 */

var fs = require('fs');
var Promise = require('bluebird');
var prom = require('./promisification.js');
var cons = require('./promiseConstructor.js');


var fetchProfileAndWriteToFile = function(readFilePath, writeFilePath) {
  return cons.pluckFirstLineFromFileAsync(readFilePath)
    .then(function(user) {
      return prom.getGitHubProfileAsync(user);
    })
    .then(function(body) {
      fs.appendFile(writeFilePath, JSON.stringify(body));
    }).catch(function(err) {
      console.log(err);
    });
};

// Export these functions so we can test them
module.exports = {
  fetchProfileAndWriteToFile: fetchProfileAndWriteToFile
};
