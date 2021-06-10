const fs = require("fs");
var http = require("http");
const { data } = require("jquery");

var SpotifyWebApi = require('spotify-web-api-node');

// credentials are optional
var spotifyApi = new SpotifyWebApi({
    clientId: '66ba962682654c159063a75a767d5255', // Your client id
    clientSecret: 'aa80334eb8864f1a8698c47e7fe418d2', // Your secret
    redirectUri: 'http://localhost:8888/callback' // Your redirect uri
});

spotifyApi.setAccessToken('BQDiJcV1chnwrCEkQvGujyql0daCWtzPwOAW8gxHJKkhd-m6HLrj2cOry44PTNltKABXuDvtGYTt32qHHNA7qlZXrKKvZQzznQ-BF1RI438A7bS9U1T7nTxGjaakn7-HCQAvC1xqItCJ5n26iGtqn6Fjv95-tEGYH3wdM9UUTt9igiIWLCr5HObrrG05I-rT_CO5');
let server = http.createServer()

spotifyApi.getArtist('3Y7RZ31TRPVadSFVy1o8os')
    .then(function(data) {
        console.log('Artist information', data.body.name);
    }, function(err) {
        console.error(err);
    });


server.on('request', (request, response) => {
    fs.readFile('index.html', (err, data) => {
        if (err) throw err
        response.writeHead(200, {
            "Content-Type": "text/html; charset=utf-8"
        })
        response.end(data)
    })
})

server.listen(8888)