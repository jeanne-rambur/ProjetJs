const fs = require("fs");
var http = require("http");

var client_id = '66ba962682654c159063a75a767d5255'; // Your client id
var client_secret = 'aa80334eb8864f1a8698c47e7fe418d2'; // Your secret
var redirect_uri = 'http://localhost:8888/callback'; // Your redirect uri

var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
var xhr = new XMLHttpRequest();

var SpotifyWebApi = require('spotify-web-api-js');

var spotifyApi = new SpotifyWebApi();

spotifyApi.getArtistAlbums('43ZHCT0cAZBISjO8DG9PnE', function(err, data) {
    if (err) console.error(err);
    else console.log('Artist albums', data);
});

let server = http.createServer()

server.on('request', (request, response) => {
    fs.readFile('index.html', (err, data) => {
        if (err) throw err
        response.writeHead(200, {
            "Content-Type": "text/html; charset=utf-8"
        })
        response.end(data)
    })
})

server.listen(8080)