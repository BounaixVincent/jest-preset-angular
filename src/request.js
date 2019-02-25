const http = require('http');

http.createServer(function(request, response){

    //The following code will print out the incoming request text
    request.pipe(response);

}).listen(8080, '127.0.0.1');


exports.request = (url) => {
    return new Promise(resolve => {
        // This is an example of an http request, for example to fetch
        // user data from an API.
        // This module is being mocked in __mocks__/request.js
        http.get({path: url}, response => {
            let data = '';
            response.on('data', _data => (data += _data));
            response.on('end', () => resolve(data));
        });
    });
}