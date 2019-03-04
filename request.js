"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var http = require('http');
// http.createServer(function(request, response){
//
//     //The following code will print out the incoming request text
//     request.pipe(response);
//
// }).listen(8080, '127.0.0.1');
function request(url) {
    return new Promise(function (resolve) {
        // This is an example of an http request, for example to fetch
        // user data from an API.
        // This module is being mocked in __mocks__/request.js
        http.get({ path: url }, function (response) {
            var data = '';
            response.on('data', function (_data) { return (data += _data); });
            response.on('end', function () { return resolve(data); });
        });
    });
}
exports.default = request;
