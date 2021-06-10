const fs = require("fs");
var http = require("http");
var Spotify = require('spotify-web-api-node');

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

server.listen(8888)



var CLIENT_ID = "6beecd543ea04b7b9f5aba153c98151e";
var REDIRECT_URI = "http://localhost:8888/callback";

var spotify = new Spotify({
    id: '66ba962682654c159063a75a767d5255',
    secret: 'aa80334eb8864f1a8698c47e7fe418d2',
    redirectUri: 'http://localhost:8888/callback'
});


spotify.setAccessToken('BQC2XgA3igt-Kni7R7F1d7uKHdhNtpkmBhwmfQHXYPRSkTaxWjjKdYQnea2CA82_VEjk8S-YhpxMnADkLCkBYGyKmX2ulT-EtNotImXuV15po4tERwoSADg_XhbnQyidaJr9Yf2ahNCcMIt0FfpDc22U5lBxd9y6WcTRU--K-C3XUmqZAQ4685X_L-dmB6IlyRL5');
/*
spotify.getMySavedTracks()
    .then(function(data) {
        console.log('Save Tracks', data.body.items);
    }, function(err) {
        console.error(err);
    });

spotify.getUser('jeannerambur')
    .then(function(data) {
        console.log('User', data.body);
    }, function(err) {
        console.error(err);
    });;

spotify.getMe()
    .then(function(data) {
        console.log('User', data.body);
    }, function(err) {
        console.error(err);
    });;

function shuffle(array) {
    let counter = array.length;

    // While there are elements in the array
    while (counter > 0) {
        // Pick a random index
        let index = Math.floor(Math.random() * counter);

        // Decrease counter by 1
        counter--;

        // And swap the last element with it
        let temp = array[counter];
        array[counter] = array[index];
        array[index] = temp;
    }

    return array;
}*/
function loadSongs() {
    //Get the total
    spotify.getMySavedTracks()
        .then(function(data) {
            console.log(data.body.items);
        }, function(err) {
            console.error(err);
        });
}